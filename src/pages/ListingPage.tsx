import Pagination from '../components/common/Pagination'
// components
import ProductCard from '../components/ProductCard'
import SearchSortBar from '../components/SearchSortBar'
// constants, hooks
import { UI_TEXT } from '../constants/uiText'
import useVehicleContext from '../hooks/useVehicleContext'

function ListingPage() {
  const {
    displayedVehicles,
    paginatedVehicles,
    loading,
    error,
    searchTerm,
    sortOption,
    currentPage,
    totalPages,
    setSearchTerm,
    setSortOption,
    setCurrentPage,
  } = useVehicleContext()

  return (
    <section>
      <div className="mb-7 rounded-3xl border border-white/15 bg-gradient-to-r from-indigo-500/20 via-sky-500/15 to-fuchsia-500/20 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {UI_TEXT.inventoryBadge}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
          {UI_TEXT.inventoryTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-slate-200 sm:text-base">
          {UI_TEXT.inventoryDescription}
        </p>
        <div className="mt-5 inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-100">
          {loading
            ? 'Updating inventory...'
            : `${displayedVehicles.length} vehicles shown • Page ${currentPage}/${totalPages}`}
        </div>
      </div>

      <SearchSortBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />

      {loading && (
        <div className="rounded-3xl border border-white/15 bg-white/10 p-10 text-center text-slate-200 shadow-2xl backdrop-blur-xl">
          {UI_TEXT.loadingListings}
        </div>
      )}

      {!loading && error && (
        <div className="rounded-3xl border border-red-400/40 bg-red-500/10 p-5 text-red-200 shadow-2xl backdrop-blur-xl">
          {error}
        </div>
      )}

      {!loading && !error && (
        <>
          {displayedVehicles.length === 0 ? (
            <div className="rounded-3xl border border-white/15 bg-white/10 p-10 text-center text-slate-200 shadow-2xl backdrop-blur-xl">
              {UI_TEXT.noVehiclesFound}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {paginatedVehicles.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </>
      )}
    </section>
  )
}

export default ListingPage
