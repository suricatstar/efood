import { useState, useEffect } from 'react'
import Hero from '../../components/Hero/hero.component'
import Restaurant from '../../components/Restaurant/restaurant.component'
import { fetchRestaurants } from '../../services/restaurantApi'
import type { Restaurant as RestaurantType } from '../../types/api.types'
import * as S from './home.styles'

const Home = () => {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        setLoading(true)
        const data = await fetchRestaurants()
        setRestaurants(data)
      } catch (err) {
        setError('Erro ao carregar restaurantes')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadRestaurants()
  }, [])

  if (loading) {
    return (
      <>
        <Hero />
        <div className="container">
          <S.LoadingMessage>Carregando restaurantes...</S.LoadingMessage>
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Hero />
        <div className="container">
          <S.ErrorMessage>{error}</S.ErrorMessage>
        </div>
      </>
    )
  }

  return (
    <>
      <Hero />
      <div className="container">
        <S.RestaurantList>
          {restaurants.map((restaurant) => (
            <Restaurant 
              key={restaurant.id} 
              id={restaurant.id}
              name={restaurant.titulo}
              rating={restaurant.avaliacao}
              description={restaurant.descricao}
              image={restaurant.capa}
              highlighted={restaurant.destacado}
              type={restaurant.tipo}
            />
          ))}
        </S.RestaurantList>
      </div>
    </>
  )
}

export default Home