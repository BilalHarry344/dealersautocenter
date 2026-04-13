// constants, interfaces
import { UI_TEXT } from '../constants/uiText'
import type { SortOption } from '../interfaces/vehicle'
import type { SearchSortBarProps } from '../interfaces/props/searchSortBarProps'

function SearchSortBar({
  searchTerm,
  onSearchChange,
  sortOption,
  onSortChange,
}: SearchSortBarProps) {
  return (
    <section className="mb-7 rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="search"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            {UI_TEXT.searchByNameLabel}
          </label>
          <input
            id="search"
            type="text"
            placeholder={UI_TEXT.searchVehiclesPlaceholder}
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            className="w-full rounded-xl border border-white/20 bg-slate-900/50 px-4 py-2.5 text-sm text-white outline-none ring-cyan-300/40 transition placeholder:text-slate-400 focus:border-cyan-300 focus:ring-4"
          />
        </div>

        <div>
          <label
            htmlFor="sort"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            {UI_TEXT.sortByLabel}
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(event) => onSortChange(event.target.value as SortOption)}
            className="w-full rounded-xl border border-white/20 bg-slate-900/50 px-4 py-2.5 text-sm text-white outline-none ring-cyan-300/40 transition focus:border-cyan-300 focus:ring-4"
          >
            <option value="name-asc">{UI_TEXT.sortNameAsc}</option>
            <option value="name-desc">{UI_TEXT.sortNameDesc}</option>
            <option value="price-asc">{UI_TEXT.sortPriceAsc}</option>
            <option value="price-desc">{UI_TEXT.sortPriceDesc}</option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default SearchSortBar
