import { useEffect, useRef, useState } from 'react'
import type { ChangeEventHandler, FormEventHandler } from 'react'
// components
import FormField from '../components/FormField'
import Snackbar from '../components/common/Snackbar'
// constants, utils, interfaces
import { UI_TEXT } from '../constants/uiText'
import { validateForm } from '../utils/validators'
import { INITIAL_FORM_VALUES } from '../data/initialValues'
import type { FormErrors, FormValues } from '../interfaces/form'

function FormPage() {
  const [formValues, setFormValues] = useState<FormValues>(INITIAL_FORM_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [showSuccessSnackbar, setShowSuccessSnackbar] = useState(false)
  const snackbarTimerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (snackbarTimerRef.current) {
        window.clearTimeout(snackbarTimerRef.current)
      }
    }
  }, [])

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target
    const fieldName = name as keyof FormValues

    setFormValues((previous) => ({
      ...previous,
      [fieldName]: value,
    }))

    setErrors((previous) => ({
      ...previous,
      [fieldName]: '',
    }))
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const validationErrors = validateForm(formValues)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setFormValues(INITIAL_FORM_VALUES)
    setShowSuccessSnackbar(true)
    if (snackbarTimerRef.current) {
      window.clearTimeout(snackbarTimerRef.current)
    }
    snackbarTimerRef.current = window.setTimeout(() => {
      setShowSuccessSnackbar(false)
    }, 2500)
  }

  return (
    <section>
      <Snackbar message={UI_TEXT.formSuccess} visible={showSuccessSnackbar} />
      <div className="mb-7 rounded-3xl border border-white/15 bg-gradient-to-r from-cyan-500/20 via-indigo-500/15 to-fuchsia-500/20 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {UI_TEXT.formBadge}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
          {UI_TEXT.formTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
          {UI_TEXT.formDescription}
        </p>
      </div>

      <div className="mx-auto max-w-2xl rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
        <form className="space-y-5" onSubmit={handleSubmit} noValidate>
          <FormField
            id="fullName"
            label={UI_TEXT.fieldFullName}
            name="fullName"
            value={formValues.fullName}
            onChange={handleChange}
            error={errors.fullName}
            placeholder={UI_TEXT.placeholderFullName}
          />

          <FormField
            id="email"
            type="email"
            label={UI_TEXT.fieldEmail}
            name="email"
            value={formValues.email}
            onChange={handleChange}
            error={errors.email}
            placeholder={UI_TEXT.placeholderEmail}
          />

          <FormField
            id="phone"
            type="tel"
            label={UI_TEXT.fieldPhone}
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder={UI_TEXT.placeholderPhone}
          />

          <FormField
            id="password"
            type="password"
            label={UI_TEXT.fieldPassword}
            name="password"
            value={formValues.password}
            onChange={handleChange}
            error={errors.password}
            placeholder={UI_TEXT.placeholderPassword}
          />

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:from-cyan-300 hover:to-indigo-400 focus:outline-none focus:ring-4 focus:ring-cyan-200/60"
          >
            {UI_TEXT.formSubmit}
          </button>
        </form>
      </div>
    </section>
  )
}

export default FormPage
