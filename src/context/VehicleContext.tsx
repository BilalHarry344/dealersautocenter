import type { ReactNode } from 'react'
import { createContext, useEffect, useMemo, useState } from 'react'
// constants, hooks, services
import { UI_TEXT } from '../constants/uiText'
import useDebounce from '../hooks/useDebounce'
import { fetchProducts } from '../services/productsApi'
// interfaces
import type { SortOption, Vehicle } from '../interfaces/vehicle'
import type { VehicleContextValue } from '../interfaces/context/vehicleContext'

const VehicleContext = createContext<VehicleContextValue | undefined>(undefined)

function VehicleProvider({ children }: { children: ReactNode }) {
  const itemsPerPage = 10
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOption, setSortOption] = useState<SortOption>('name-asc')
  const [currentPage, setCurrentPage] = useState(1)

  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  useEffect(() => {
    let isMounted = true

    async function loadProducts() {
      setLoading(true)
      setError('')
      try {
        const data = await fetchProducts()
        if (isMounted) {
          setVehicles(data)
        }
      } catch (fetchError) {
        if (isMounted) {
          const message =
            fetchError instanceof Error
              ? fetchError.message
              : UI_TEXT.genericFetchError
          setError(message)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadProducts()

    return () => {
      isMounted = false
    }
  }, [])

  const displayedVehicles = useMemo(() => {
    const filtered = vehicles.filter((vehicle) =>
      vehicle.title
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase().trim()),
    )

    return [...filtered].sort((first, second) => {
      if (sortOption === 'price-asc') {
        return first.price - second.price
      }
      if (sortOption === 'price-desc') {
        return second.price - first.price
      }
      if (sortOption === 'name-desc') {
        return second.title.localeCompare(first.title)
      }
      return first.title.localeCompare(second.title)
    })
  }, [vehicles, debouncedSearchTerm, sortOption])

  const totalPages = Math.max(1, Math.ceil(displayedVehicles.length / itemsPerPage))

  const paginatedVehicles = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return displayedVehicles.slice(startIndex, startIndex + itemsPerPage)
  }, [currentPage, displayedVehicles, itemsPerPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [debouncedSearchTerm, sortOption])

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  function getVehicleById(vehicleId: number): Vehicle | null {
    return vehicles.find((vehicle) => vehicle.id === vehicleId) ?? null
  }

  const value: VehicleContextValue = {
    vehicles,
    displayedVehicles,
    paginatedVehicles,
    loading,
    error,
    searchTerm,
    sortOption,
    currentPage,
    totalPages,
    itemsPerPage,
    setSearchTerm,
    setSortOption,
    setCurrentPage,
    getVehicleById,
  }

  return <VehicleContext.Provider value={value}>{children}</VehicleContext.Provider>
}

export { VehicleContext, VehicleProvider }
