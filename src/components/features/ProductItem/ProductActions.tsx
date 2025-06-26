'use client'

import { ButtonPrimary, ButtonSecondary } from '@/components/ui'
import { ArrowExpandIcon, ShoppingBag03Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { DrawerMode, useDrawer } from '../Drawer'
import { AddToCardButton } from './AddToCardButton'

interface Props {
  title: string
  featuredImage: string
  price: number
  size?: string
  color?: string
  variantId: string
  handle: string
}

export const ProductActions: FC<Props> = ({ title, featuredImage, price, size, color, variantId, handle }) => {
  const { openDrawer, setProductQuickViewHandle } = useDrawer()
  const t = useTranslations('components.productActions')

  return (
    <div className="invisible absolute inset-x-1 bottom-0 flex justify-center opacity-0 transition-all group-hover:visible group-hover:bottom-4 group-hover:opacity-100">
      <AddToCardButton
        as={ButtonPrimary}
        className="shadow-lg"
        fontSize="text-xs"
        sizeClass="py-2 px-4"
        title={title}
        imageUrl={featuredImage}
        price={price}
        quantity={1}
        size={size}
        color={color}
        variantId={variantId}
      >
        <HugeiconsIcon icon={ShoppingBag03Icon} size={12} color="currentColor" strokeWidth={2} className="mb-px" />
        <span className="ms-1">{t('addToBag')} </span>
      </AddToCardButton>

      <ButtonSecondary
        className="ms-1.5 bg-white shadow-lg transition-colors hover:bg-gray-100! hover:text-neutral-900"
        fontSize="text-xs"
        sizeClass="py-2 px-4"
        onClick={() => {
          setProductQuickViewHandle(handle)
          openDrawer(DrawerMode.PRODUCT_QUICK_VIEW)
        }}
      >
        <HugeiconsIcon icon={ArrowExpandIcon} size={12} color="currentColor" strokeWidth={2} className="size-3.5" />

        <span className="ms-1">{t('quickView')}</span>
      </ButtonSecondary>
    </div>
  )
}
