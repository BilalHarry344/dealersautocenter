// constants, interfaces
import { API } from '../constants/api'
import type { CarsApiResponse, Vehicle } from '../interfaces/vehicle'

function parsePrice(rawPrice: string): number {
  const normalized = rawPrice.replace(/[^0-9.]/g, '')
  const amount = Number.parseFloat(normalized)
  return Number.isFinite(amount) ? amount : 0
}

export async function fetchProducts(): Promise<Vehicle[]> {
  const response = await fetch(API.carsUrl)
  if (!response.ok) {
    throw new Error('Unable to load vehicle inventory. Please try again.')
  }

  const data = (await response.json()) as CarsApiResponse
  if (!Array.isArray(data.cars)) {
    throw new Error('Unexpected API response format.')
  }

  return data.cars.slice(0, 24).map((car) => ({
    id: car.id,
    title: `${car.car_model_year} ${car.car} ${car.car_model}`,
    price: parsePrice(car.price),
    image: `https://picsum.photos/seed/car-${car.id}/800/800`,
  }))
}
