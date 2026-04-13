import type { SortOption } from '../vehicle'

export interface SearchSortBarProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  sortOption: SortOption
  onSortChange: (value: SortOption) => void
}
