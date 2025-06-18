import type { Meta, StoryObj } from '@storybook/react'
import AvatarDropdown from './AvatarDropdown'

const meta: Meta<typeof AvatarDropdown> = {
  title: 'Components/AvatarDropdown',
  component: AvatarDropdown,
}

export default meta

type Story = StoryObj<typeof AvatarDropdown>

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
