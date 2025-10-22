import type { Restaurant } from '../types/api.types'

const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

export const fetchRestaurants = async (): Promise<Restaurant[]> => {
  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error('Erro ao buscar restaurantes')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Erro:', error)
    throw error
  }
}

export const fetchRestaurantById = async (id: number): Promise<Restaurant> => {
  try {
    const restaurants = await fetchRestaurants()
    const restaurant = restaurants.find(r => r.id === id)
    
    if (!restaurant) {
      throw new Error('Restaurante não encontrado')
    }
    
    return restaurant
  } catch (error) {
    console.error('Erro:', error)
    throw error
  }
}