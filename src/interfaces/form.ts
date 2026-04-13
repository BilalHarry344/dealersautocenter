export interface FormValues {
  fullName: string
  email: string
  phone: string
  password: string
}

export type FormErrors = Partial<Record<keyof FormValues, string>>
