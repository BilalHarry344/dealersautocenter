import { VALIDATION_TEXT } from '../constants/validationText'
import type { FormErrors, FormValues } from '../interfaces/form'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.fullName.trim()) {
    errors.fullName = VALIDATION_TEXT.fullNameRequired
  }

  if (!values.email.trim()) {
    errors.email = VALIDATION_TEXT.emailRequired
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = VALIDATION_TEXT.emailInvalid
  }

  if (!values.phone.trim()) {
    errors.phone = VALIDATION_TEXT.phoneRequired
  }

  if (!values.password) {
    errors.password = VALIDATION_TEXT.passwordRequired
  } else if (values.password.length < 6) {
    errors.password = VALIDATION_TEXT.passwordMinLength
  }

  return errors
}
