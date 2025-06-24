import type { Meta, StoryObj } from '@storybook/react'
import { expect, screen, waitFor, within } from 'storybook/test'
import { LanguageCurrencySelector } from './LanguageCurrencySelector'

const meta: Meta<typeof LanguageCurrencySelector> = {
  title: 'Components/LanguageCurrencySelector',
  component: LanguageCurrencySelector,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes for the container',
    },
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a202c' },
      ],
    },
  },
  play: async ({ canvas, userEvent }) => {
    console.log('STEP 1: Finding trigger button')
    const triggerButton = await canvas.findByRole('button', {
      name: /language/i,
    })
    await userEvent.click(triggerButton)
    await setTimeout(() => {}, 1000)

    console.log('STEP 2: Waiting for dialog')
    let dialog: HTMLElement
    try {
      dialog = await screen.findByRole('dialog', {}, { timeout: 3000 })
      console.log('Dialog found:', dialog)
    } catch (error) {
      console.error('Dialog not found! Current DOM:')
      console.log(document.documentElement.innerHTML)
      throw error
    }

    console.log('STEP 3: Finding country buttons')
    const dialogCanvas = within(dialog)
    const countryButtons = await dialogCanvas.findAllByRole(
      'button',
      {
        name: /[A-Za-z]/,
      },
      { timeout: 1000 }
    )

    console.log(`Found ${countryButtons.length} country buttons`)
    await userEvent.click(countryButtons[0])

    console.log('STEP 4: Verifying dialog closed')
    await waitFor(
      () => {
        expect(canvas.queryByRole('dialog')).toBeNull()
      },
      { timeout: 1000 }
    )
  },
}

export default meta

type Story = StoryObj<typeof LanguageCurrencySelector>

// Default story
export const Default: Story = {
  args: {
    className: '',
  },
}

// Dark mode story
export const DarkMode: Story = {
  args: {
    className: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

// With custom styling
export const CustomStyled: Story = {
  args: {
    className: 'p-4 bg-gray-100 rounded-lg',
  },
}
