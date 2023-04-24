import { Button, Toast, ToastProps } from '@ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <Button
        onClick={() => {
          setOpen((state) => !state)
        }}
      >
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Form/Toast',
  component: DemoToast,
  tags: ['autodocs'],
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
