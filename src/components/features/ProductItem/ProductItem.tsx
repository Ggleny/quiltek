'use client'

import { LikeButton } from '@/components/ui'
import { IProduct } from '@/data/types'
import { extractOptionValue, getColorOption, getFirstVariant } from '@/lib/utils'
import { StarIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import Link from 'next/link'
import { FC, memo } from 'react'
import NcImage from '../NcImage/NcImage'
import { Prices } from '../Prices'
import { ProductStatus } from '../ProductStatus'
import { ColorSwatches } from './ColorSwatches'
import { ProductActions } from './ProductActions'

export interface ProductItemProps {
  className?: string
  data: IProduct
  isLiked?: boolean
}

const ProductItem: FC<ProductItemProps> = ({ className = '', data, isLiked }) => {
  const { title, price, status, featuredImage, handle, options, description, reviews } = data

  const firstVariant = getFirstVariant(data)
  const color = extractOptionValue(firstVariant?.selectedOptions || [], 'Color')
  const size = extractOptionValue(firstVariant?.selectedOptions || [], 'Size')
  const colorOptions = getColorOption(options)?.values || []

  return (
    <div className={`nc-ProductCard relative flex flex-col bg-transparent ${className}`}>
      <Link href={`/products/${handle}`} className="absolute inset-0" />

      <div className="group relative z-1 shrink-0 overflow-hidden rounded-3xl bg-neutral-50 dark:bg-neutral-300">
        <Link href={`/products/${handle}`} className="block">
          <NcImage
            containerClassName="flex aspect-w-11 aspect-h-12 w-full h-0"
            src={featuredImage}
            className="h-full w-full object-cover"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 40vw"
            alt={title}
          />
        </Link>

        {status && <ProductStatus status={status} />}
        <LikeButton liked={isLiked} className="absolute end-3 top-3 z-10" />

        {firstVariant && (
          <ProductActions
            title={title}
            featuredImage={featuredImage.src}
            price={price.amount}
            size={size}
            color={color}
            variantId={firstVariant.id}
            handle={handle}
          />
        )}
      </div>

      <div className="space-y-4 px-2.5 pt-5 pb-2.5">
        <ColorSwatches colorOptions={colorOptions} />

        <div>
          <h2 className="text-base font-semibold transition-colors">{title}</h2>
        </div>

        <div className="flex items-end justify-between">
          <Prices price={price.amount} discountedPrice={price.discountedAmount} />
          {reviews && (
            <div className="mb-0.5 flex items-center">
              <HugeiconsIcon
                icon={StarIcon}
                size={24}
                color="currentColor"
                strokeWidth={1.5}
                className="h-5 w-5 pb-px text-amber-400"
              />
              <span className="ms-1 text-sm text-neutral-500 dark:text-neutral-400">
                {reviews.averageRating} ({reviews.count} reviews)
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default memo(ProductItem)
