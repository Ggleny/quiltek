'use client'

import { createContext, useState, type ReactNode } from 'react'
import { DrawerContextValue, DrawerMode } from './types'

export const DrawerContext = createContext<DrawerContextValue | null>(null)

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<DrawerMode>(DrawerMode.CLOSED)
  const [productQuickViewHandle, setProductQuickViewHandle] = useState<string>()

  return (
    <DrawerContext.Provider
      value={{
        mode,
        openDrawer: setMode,
        closeDrawer: () => setMode(DrawerMode.CLOSED),
        productQuickViewHandle,
        setProductQuickViewHandle,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}
