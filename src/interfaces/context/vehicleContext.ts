import type { Dispatch, SetStateAction } from 'react'
import type { SortOption, Vehicle } from '../vehicle'

export interface VehicleContextValue {
  vehicles: Vehicle[]
  displayedVehicles: Vehicle[]
  paginatedVehicles: Vehicle[]
  loading: boolean
  error: string
  searchTerm: string
  sortOption: SortOption
  currentPage: number
  totalPages: number
  itemsPerPage: number
  setSearchTerm: Dispatch<SetStateAction<string>>
  setSortOption: Dispatch<SetStateAction<SortOption>>
  setCurrentPage: Dispatch<SetStateAction<number>>
  getVehicleById: (vehicleId: number) => Vehicle | null
}
