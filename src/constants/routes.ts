export const ROUTES = {
  listing: '/',
  form: '/form',
  vehicleDetails: '/vehicle/:vehicleId',
} as const

export function getVehicleDetailsPath(vehicleId: number): string {
  return `/vehicle/${vehicleId}`
}
