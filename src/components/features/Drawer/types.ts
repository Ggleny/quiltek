import { ReactNode } from 'react'

export enum DrawerMode {
  SEARCH = 'search',
  CART = 'cart',
  WISHLIST = 'wishlist',
  CLOSED = 'closed',
  SIDEBAR_NAVIGATION = 'sidebar-navigation',
  CATEGORY_FILTERS = 'category-filters',
  PRODUCT_QUICK_VIEW = 'product-quick-view',
}

export type DrawerPosition = 'left' | 'right'
export type DrawerMaxWidth = 'sm' | 'md' | 'lg' | 'xl'

export interface DrawerProps {
  title?: string
  logoOnHeader?: boolean
  position?: DrawerPosition
  children: ReactNode
  mode: DrawerMode
  maxWidth?: DrawerMaxWidth
  showHeader?: boolean
  className?: string
}

export type DrawerContextValue = {
  mode: DrawerMode
  openDrawer: (mode: DrawerMode) => void
  closeDrawer: () => void
  productQuickViewHandle?: string
  setProductQuickViewHandle: (handle: string) => void
}
