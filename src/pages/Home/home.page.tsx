import styled from 'styled-components'
import Hero from '../../components/Hero/hero.component'
import Restaurant from '../../components/Restaurant/restaurant.component'

const RestaurantList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 38px 40px;
  margin: 80px 0;
`

const restaurants = [
  {
    id: 1,
    name: 'Hioki Sushi',
    rating: 4.9,
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagem cuidadosa e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: '/sushIMG.png',
    highlighted: true,
    type: 'Japonesa'
  },
  {
    id: 2,
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: '/macarroIMG.png',
    highlighted: false,
    type: 'Italiana'
  },
  {
    id: 3,
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: '/macarroIMG.png',
    highlighted: false,
    type: 'Italiana'
  },
  {
    id: 4,
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: '/macarroIMG.png',
    highlighted: false,
    type: 'Italiana'
  },
  {
    id: 5,
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: '/macarroIMG.png',
    highlighted: false,
    type: 'Italiana'
  },
  {
    id: 6,
    name: 'La Dolce Vita Trattoria',
    rating: 4.6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: '/macarroIMG.png',
    highlighted: false,
    type: 'Italiana'
  }
]

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