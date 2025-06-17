import Drawer from '@/components/features/Drawer'
import metadataConfig from '@/config/metadata.json'
import { routing } from '@/i18n/routing'
import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'

import { baseUrl } from '@/lib/utils'
import '@/styles/tailwind.css'
import { Poppins } from 'next/font/google'
import GlobalClient from '../GlobalClient'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  ...metadataConfig,
  metadataBase: new URL(baseUrl),
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  console.log(params, routing, locale)
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200">
        <NextIntlClientProvider>
          <Drawer.Provider>
            {children}

            {/* Client component: Toaster */}
            <GlobalClient />
          </Drawer.Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
