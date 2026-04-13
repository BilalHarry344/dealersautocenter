import type { SnackbarProps } from '../../interfaces/props/snackbarProps'

function Snackbar({ message, visible }: SnackbarProps) {
  if (!visible) {
    return null
  }

  return (
    <div className="pointer-events-none fixed right-4 top-20 z-[100] sm:right-6 sm:top-24">
      <div className="rounded-2xl border border-emerald-300 bg-emerald-600 px-4 py-3 text-sm font-medium text-white shadow-2xl">
        {message}
      </div>
    </div>
  )
}

export default Snackbar
