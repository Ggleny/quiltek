import { DiscountIcon } from '@/components/ui'

import { Clock01Icon, SparklesIcon, UnavailableIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { FC } from 'react'

interface Props {
  status?: string
  className?: string
}

export const ProductStatus: FC<Props> = ({
  status = 'New in',
  className = 'absolute top-3 start-3 px-2.5 py-1.5 text-xs bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300',
}) => {
  const renderStatus = () => {
    if (!status) {
      return null
    }
    const classes = `nc-shadow-lg rounded-full flex items-center justify-center ${className}`
    if (status === 'New in') {
      return (
        <div className={classes}>
          <HugeiconsIcon icon={SparklesIcon} size={24} color="currentColor" strokeWidth={1.5} className="h-3.5 w-3.5" />
          <span className="ms-1 leading-none">{status}</span>
        </div>
      )
    }
    if (status === '50% Discount') {
      return (
        <div className={classes}>
          <DiscountIcon className="h-3.5 w-3.5" />
          <span className="ms-1 leading-none">{status}</span>
        </div>
      )
    }
    if (status === 'Sold Out') {
      return (
        <div className={classes}>
          <HugeiconsIcon
            icon={UnavailableIcon}
            size={24}
            color="currentColor"
            strokeWidth={1.5}
            className="h-3.5 w-3.5"
          />
          <span className="ms-1 leading-none">{status}</span>
        </div>
      )
    }
    if (status === 'limited edition') {
      return (
        <div className={classes}>
          <HugeiconsIcon icon={Clock01Icon} size={24} color="currentColor" strokeWidth={1.5} className="h-3.5 w-3.5" />
          <span className="ms-1 leading-none">{status}</span>
        </div>
      )
    }
    return null
  }

  return renderStatus()
}

export default ProductStatus
