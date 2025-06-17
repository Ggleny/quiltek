import { Logo } from '@/components/ui'
import clsx from 'clsx'
import { FC } from 'react'
import AvatarDropdown from './AvatarDropdown'
import CartBtn from './CartBtn'
import SearchBtnPopover from './SearchBtnPopover'
import WishlistBtn from './WishlistBtn'
export interface HeaderProps {
  hasBorderBottom?: boolean
}

export const Header: FC<HeaderProps> = async ({ hasBorderBottom = true }) => {
  return (
    <div className="relative z-10">
      <div className="container">
        <div
          className={clsx(
            'flex h-20 justify-between gap-x-2.5 border-neutral-200 dark:border-neutral-700',
            hasBorderBottom && 'border-b',
            !hasBorderBottom && 'has-[.header-popover-full-panel]:border-b'
          )}
        >
          <div className="flex items-center justify-center gap-x-3 sm:gap-x-8">
            <Logo />
            <div className="hidden h-9 border-l border-neutral-200 md:block dark:border-neutral-700"></div>
          </div>

          <div className="flex flex-1 items-center justify-end gap-x-2.5 sm:gap-x-5">
            <SearchBtnPopover />
            <AvatarDropdown />
            <WishlistBtn />
            <CartBtn />
          </div>
        </div>
      </div>
    </div>
  )
}
