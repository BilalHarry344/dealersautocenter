import { useContext } from 'react'
// context
import { VehicleContext } from '../context/VehicleContext'

function useVehicleContext() {
  const context = useContext(VehicleContext)
  if (!context) {
    throw new Error('useVehicleContext must be used within VehicleProvider')
  }
  return context
}

export default useVehicleContext
