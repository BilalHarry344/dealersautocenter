import { Link, useParams } from 'react-router-dom'
// constants, hooks
import { ROUTES } from '../constants/routes'
import { UI_TEXT } from '../constants/uiText'
import useVehicleContext from '../hooks/useVehicleContext'

function VehicleDetailsPage() {
  const { vehicleId } = useParams()
  const { loading, error: vehiclesError, getVehicleById } = useVehicleContext()

  const parsedId = Number(vehicleId)
  const isValidVehicleId = Number.isInteger(parsedId) && parsedId > 0
  const vehicle = isValidVehicleId ? getVehicleById(parsedId) : null

  const detailsError = !isValidVehicleId
    ? UI_TEXT.detailsInvalidId
    : vehiclesError || (!loading && !vehicle ? UI_TEXT.detailsNotFound : '')

  return (
    <section className="space-y-6">
      <Link
        to={ROUTES.listing}
        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
      >
        <span aria-hidden="true">←</span> {UI_TEXT.backToListing}
      </Link>

      {loading && (
        <div className="rounded-3xl border border-white/15 bg-white/10 p-10 text-center text-slate-200 shadow-2xl backdrop-blur-xl">
          {UI_TEXT.detailsLoading}
        </div>
      )}

      {!loading && detailsError && (
        <div className="rounded-3xl border border-red-400/40 bg-red-500/10 p-5 text-red-200 shadow-2xl backdrop-blur-xl">
          {detailsError}
        </div>
      )}

      {!loading && !detailsError && vehicle && (
        <article className="grid gap-6 rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl lg:grid-cols-2 lg:p-8">
          <div className="overflow-hidden rounded-2xl bg-slate-900/40">
            <img
              src={vehicle.image}
              alt={vehicle.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {UI_TEXT.detailsHeading}
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {vehicle.title}
            </h2>
            <p className="text-3xl font-bold text-cyan-300">
              ${vehicle.price.toFixed(2)}
            </p>
            <p className="text-sm text-slate-200">
              {UI_TEXT.detailsDescription}
            </p>
          </div>
        </article>
      )}
    </section>
  )
}

export default VehicleDetailsPage
