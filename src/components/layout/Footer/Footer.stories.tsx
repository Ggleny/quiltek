import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen', // Important for the popover positioning
  },
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {
  parameters: {
    // Ensure dark mode works with your theme system
    backgrounds: { default: 'light' },
  },
}

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-neutral-900 p-4">
        <Story />
      </div>
    ),
  ],
}
