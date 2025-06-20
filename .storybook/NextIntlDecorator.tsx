// .storybook/NextIntlDecorator.tsx
'use client'

import { NextIntlClientProvider } from 'next-intl'
import React from 'react'
import * as defaultMessages from '../messages/en.json'

export function NextIntlDecorator(Story: React.FC) {
  return (
    <NextIntlClientProvider locale="en" messages={defaultMessages} timeZone="UTC">
      <Story />
    </NextIntlClientProvider>
  )
}
