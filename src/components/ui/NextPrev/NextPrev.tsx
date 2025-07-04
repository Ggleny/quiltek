'use client'

import { ArrowLeft02Icon, ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import React, { FC } from 'react'

export interface NextPrevProps {
  className?: string
  currentPage?: number
  totalPage?: number
  btnClassName?: string
  onClickNext?: () => void
  onClickPrev?: () => void
  onlyNext?: boolean
  onlyPrev?: boolean
  nextDisabled?: boolean
  prevDisabled?: boolean
}

export const NextPrev: FC<NextPrevProps> = ({
  className = '',
  onClickNext = () => {},
  onClickPrev = () => {},
  btnClassName = 'w-10 h-10',
  onlyNext = false,
  onlyPrev = false,
  nextDisabled = false,
  prevDisabled = false,
}) => {
  const [focus, setFocus] = React.useState<'left' | 'right'>('right')

  return (
    <div className={`nc-NextPrev relative flex items-center text-neutral-500 dark:text-neutral-400 ${className}`}>
      {!onlyNext && (
        <button
          className={`${btnClassName} ${
            !onlyPrev ? 'me-2' : ''
          } flex items-center justify-center rounded-full border-neutral-200 dark:border-neutral-600 ${
            focus === 'left' ? 'border-2' : ''
          }`}
          onClick={(e) => {
            e.preventDefault()
            onClickPrev()
          }}
          onMouseEnter={() => setFocus('left')}
          disabled={prevDisabled}
          aria-disabled={prevDisabled}
          aria-label="Prev"
        >
          <HugeiconsIcon
            icon={ArrowLeft02Icon}
            size={20}
            color="currentColor"
            className="h-5 w-5 rtl:rotate-180"
            strokeWidth={1.5}
          />
        </button>
      )}
      {!onlyPrev && (
        <button
          className={`${btnClassName} flex items-center justify-center rounded-full border-neutral-200 dark:border-neutral-600 ${
            focus === 'right' ? 'border-2' : ''
          }`}
          onClick={(e) => {
            e.preventDefault()
            onClickNext()
          }}
          onMouseEnter={() => setFocus('right')}
          disabled={nextDisabled}
          aria-disabled={nextDisabled}
          aria-label="Next"
        >
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            size={20}
            color="currentColor"
            className="h-5 w-5 rtl:rotate-180"
            strokeWidth={1.5}
          />
        </button>
      )}
    </div>
  )
}
