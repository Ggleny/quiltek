// .storybook/NextIntlDecorator.tsx
'use client'

import { NextIntlClientProvider } from 'next-intl'
import React from 'react'

// Default English translations
const defaultMessages = {
  components: {
    avatarDropdown: {
      myAccount: 'My Account',
      myOrders: 'My Orders',
      wishlist: 'Wishlist',
      help: 'Help Center',
      logout: 'Log Out',
    },
    // Add other translation namespaces as needed
  },
}

export function NextIntlDecorator(Story: React.FC) {
  return (
    <NextIntlClientProvider locale="en" messages={defaultMessages} timeZone="UTC">
      <Story />
    </NextIntlClientProvider>
  )
}
