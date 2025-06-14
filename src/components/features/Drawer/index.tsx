import { DialogTitle } from '@headlessui/react'
import { Drawer as DrawerComponent } from './Drawer'
import { DrawerProvider } from './DrawerProvider'
import { type DrawerMaxWidth, DrawerMode, type DrawerPosition } from './types'
import { useDrawer } from './useDrawer'

// Create a compound component type
type DrawerComponentType = typeof DrawerComponent & {
  Provider: typeof DrawerProvider
  Title: typeof DialogTitle
}

// Create the compound component
const Drawer = DrawerComponent as DrawerComponentType
Drawer.Provider = DrawerProvider
Drawer.Title = DrawerComponent.Title

// Export everything with proper typing
export { DrawerMode, DrawerProvider, useDrawer }
export type { DrawerMaxWidth, DrawerMode as DrawerModeType, DrawerPosition }
export default Drawer
