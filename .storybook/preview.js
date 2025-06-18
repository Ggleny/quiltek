import { Poppins } from 'next/font/google'
import { NextIntlDecorator } from './NextIntlDecorator'

import '../src/styles/tailwind.css' // Path to your main CSS file in Next.js

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true, // Essential for Next.js 13+ App Router
    },
  },
  decorators: [
    NextIntlDecorator,
    (Story) => (
      <div className={poppins.className}>
        <Story />
      </div>
    ),
  ],
}

export default preview
