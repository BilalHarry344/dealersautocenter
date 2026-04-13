import type { FormFieldProps } from '../interfaces/props/formFieldProps'

function FormField({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
}: FormFieldProps) {
  return (
    <div className="space-y-2.5">
      <label htmlFor={id} className="block text-sm font-medium text-slate-200">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-2xl border px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-400 focus:ring-4 ${
          error
            ? 'border-red-400/50 bg-red-500/10 ring-red-300/40 focus:border-red-300'
            : 'border-white/20 bg-slate-900/50 ring-cyan-300/40 focus:border-cyan-300'
        }`}
      />
      {error ? <p className="text-sm font-medium text-red-300">{error}</p> : null}
    </div>
  )
}

export default FormField
