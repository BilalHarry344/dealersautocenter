import type { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

export interface FormFieldProps {
  id: string
  name: string
  label: string
  type?: HTMLInputTypeAttribute
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  error?: string
  placeholder?: string
}
