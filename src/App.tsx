import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
// pages
import FormPage from './pages/FormPage'
import ListingPage from './pages/ListingPage'
import VehicleDetailsPage from './pages/VehicleDetailsPage'
// constants
import { ROUTES } from './constants/routes'
import { UI_TEXT } from './constants/uiText'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -right-16 top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            {UI_TEXT.appTitle}
          </h1>
          <nav className="inline-flex w-full items-center gap-1 rounded-2xl border border-white/15 bg-white/5 p-1 sm:w-auto">
            <NavLink
              to={ROUTES.listing}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {UI_TEXT.navListing}
            </NavLink>
            <NavLink
              to={ROUTES.form}
              className={({ isActive }) =>
                `rounded-xl px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-md'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {UI_TEXT.navForm}
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <Routes>
          <Route path={ROUTES.listing} element={<ListingPage />} />
          <Route path={ROUTES.form} element={<FormPage />} />
          <Route path={ROUTES.vehicleDetails} element={<VehicleDetailsPage />} />
          <Route path="*" element={<Navigate to={ROUTES.listing} replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
