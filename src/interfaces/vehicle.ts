export interface Vehicle {
  id: number
  title: string
  price: number
  image: string
}

export type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc'

export interface ApiCar {
  id: number
  car: string
  car_model: string
  car_model_year: number
  price: string
}

export interface CarsApiResponse {
  cars: ApiCar[]
}
