import Drawer from '@/components/features/Drawer'
import metadataConfig from '@/config/metadata.json'
import type { Metadata } from 'next'

import { baseUrl } from '@/lib/utils'
import '@/styles/tailwind.css'
import { Poppins } from 'next/font/google'
import GlobalClient from './GlobalClient'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  ...metadataConfig,
  metadataBase: new URL(baseUrl),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200">
        <Drawer.Provider>
          {children}

          {/* Client component: Toaster */}
          <GlobalClient />
        </Drawer.Provider>
      </body>
    </html>
  )
}
