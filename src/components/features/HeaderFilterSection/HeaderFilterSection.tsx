'use client'

import { ButtonPrimary, Divider, Heading } from '@/components/ui'
import { Transition } from '@headlessui/react'
import { ArrowDownDoubleIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { FilterIcon } from '@hugeicons/core-free-icons'
import { FC, useState } from 'react'

export interface HeaderFilterSectionProps {
  className?: string
  heading?: string
}

export const HeaderFilterSection: FC<HeaderFilterSectionProps> = ({ className = 'mb-12', heading }) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={`relative flex flex-col ${className}`}>
      {heading && <Heading className="mb-12 text-neutral-900 dark:text-neutral-50">{heading}</Heading>}
      <div className="flex flex-col justify-between gap-y-6 lg:flex-row lg:items-center lg:gap-x-2 lg:gap-y-0">
        <span className="hidden shrink-0 lg:block">
          <ButtonPrimary
            className="w-full pr-16!"
            sizeClass="pl-4 py-2.5 sm:pl-6"
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            <HugeiconsIcon icon={FilterIcon} size={24} color="currentColor" strokeWidth={1.5} />
            <span className="ms-2.5 block truncate">Filter</span>
            <span className="absolute top-1/2 right-5 -translate-y-1/2">
              <HugeiconsIcon
                className={`size-5 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
                icon={ArrowDownDoubleIcon}
                size={24}
                color="currentColor"
                strokeWidth={1.5}
              />
            </span>
          </ButtonPrimary>
        </span>
      </div>

      <Transition
        as={'div'}
        show={isOpen}
        enter="transition-opacity duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Divider className="my-8" />
        {/* TODO: add filters */}
      </Transition>
    </div>
  )
}
