'use client'

import { DrawerMode, DrawerModeType } from '@/components/features/Drawer'
import { FavouriteIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export default function WishlistBtn() {
  //TODO: complete open drawer
  const openDrawer = (type: DrawerModeType) => {
    console.log(type)
  }

  return (
    <button
      onClick={() => openDrawer(DrawerMode.WISHLIST)}
      className="relative -m-2.5 flex cursor-pointer items-center justify-center rounded-full p-2.5 hover:bg-neutral-100 focus-visible:outline-0 dark:hover:bg-neutral-800"
    >
      <HugeiconsIcon icon={FavouriteIcon} size={24} color="currentColor" strokeWidth={1.5} />
    </button>
  )
}
