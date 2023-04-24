import * as ToastPrimitive from '@radix-ui/react-toast'
import {
  ToastContainer,
  ToastTitle,
  ToastDescription,
  ToastCloseButton,
  ToastViewPort,
} from './styles'
import { X } from '@phosphor-icons/react'
import { ComponentProps } from 'react'

export type ToastProps = ComponentProps<typeof ToastContainer> & {
  title: string
  description?: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      <ToastContainer {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastCloseButton>
          <X weight="light" size={20} />
        </ToastCloseButton>
      </ToastContainer>

      <ToastViewPort />
    </ToastPrimitive.Provider>
  )
}

Toast.displayName = 'Toast'
