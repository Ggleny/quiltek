'use client'

import { Logo } from '@/components/ui'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Cancel01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { DrawerMaxWidth, DrawerProps } from './types'
import { useDrawer } from './useDrawer'

const maxWidthClasses: Record<DrawerMaxWidth, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
}

/**
 * A sliding panel component that appears from the side of the screen.
 *
 * @param title - The title displayed in the header
 * @param logoOnHeader - Whether to show the logo instead of the title
 * @param position - Which side of the screen the drawer appears from
 * @param mode - The purpose/type of drawer being displayed
 * @param maxWidth - Maximum width of the drawer content
 * @param showHeader - Whether to show the header section
 * @param className - Additional class names for styling
 * @param children - Content to be displayed in the drawer body
 */
export function Drawer({
  title,
  logoOnHeader = false,
  position = 'right',
  children,
  mode,
  maxWidth = 'lg',
  showHeader = true,
  className,
}: DrawerProps) {
  const t = useTranslations('components.drawer')
  const { mode: activeMode, closeDrawer } = useDrawer()
  const isOpen = mode === activeMode

  const hasHeader = !!title || logoOnHeader
  const contentMaxWidthClass = maxWidthClasses[maxWidth]

  return (
    <Dialog as="div" className={clsx('relative z-50', className)} onClose={closeDrawer} open={isOpen}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-neutral-900/50 duration-300 ease-out data-closed:opacity-0"
      />

      <div className="fixed inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className={clsx('fixed inset-y-0 flex max-w-full', position === 'right' && 'right-0')}>
            <DialogPanel
              transition
              className={clsx(
                contentMaxWidthClass,
                'h-screen w-screen translate-x-0 overflow-hidden bg-white text-start align-middle shadow-xl transition duration-200 ease-in-out dark:bg-neutral-800',
                position === 'left' && 'data-closed:-translate-x-20 data-closed:opacity-0',
                position === 'right' && 'data-closed:translate-x-20 data-closed:opacity-0'
              )}
            >
              <div className="flex h-full flex-col px-4 md:px-8">
                {showHeader ? (
                  <header
                    className={`flex h-16 flex-shrink-0 items-center border-b border-neutral-900/10 md:h-20 ${
                      hasHeader ? 'justify-between' : 'justify-end'
                    }`}
                  >
                    {hasHeader && (
                      <>
                        {!!title && !logoOnHeader && (
                          <DialogTitle>
                            <span className="text-2xl font-medium">{title}</span>
                          </DialogTitle>
                        )}
                        {logoOnHeader && <Logo />}
                      </>
                    )}

                    <button
                      type="button"
                      className="group -m-4 cursor-pointer p-4"
                      onClick={closeDrawer}
                      aria-label={t('closeButton.ariaLabel')}
                    >
                      <HugeiconsIcon
                        className="transition-transform duration-200 group-hover:rotate-90"
                        icon={Cancel01Icon}
                        size={24}
                        strokeWidth={1}
                      />
                    </button>
                  </header>
                ) : null}
                <div className="flex-1 overflow-hidden">{children}</div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

// Export DialogTitle as Drawer.Title for convenience
Drawer.Title = DialogTitle
