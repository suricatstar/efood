import Hero from '../../components/Hero/hero.component'
import Restaurant from '../../components/Restaurant/restaurant.component'
import { restaurants } from '../../data/restaurants'
import * as S from './home.styles'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <S.RestaurantList>
          {restaurants.map((restaurant) => (
            <Restaurant key={restaurant.id} {...restaurant} />
          ))}
        </S.RestaurantList>
      </div>
    </>
  )
}

export default Home