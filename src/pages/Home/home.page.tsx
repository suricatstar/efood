import styled from 'styled-components'
import Hero from '../../components/Hero/hero.component'
import Restaurant from '../../components/Restaurant/restaurant.component'
import { restaurants } from '../../data/restaurants'

const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 38px 40px;
  margin: 80px 0;
`


const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <RestaurantList>
          {restaurants.map((restaurant) => (
            <Restaurant key={restaurant.id} {...restaurant} />
          ))}
        </RestaurantList>
      </div>
    </>
  )
}

export default Home