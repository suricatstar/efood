import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/header.component'
import { colors } from '../../styles/GlobalStyles'

const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

const BannerContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 0 32px;
  color: ${colors.white};
`

const Category = styled.p`
  font-size: 32px;
  font-weight: 100;
`

const RestaurantName = styled.h2`
  font-size: 32px;
  font-weight: 900;
`

const MenuSection = styled.section`
  padding: 56px 0 120px;
`

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`

const MenuItem = styled.div`
  background-color: ${colors.primary};
  padding: 8px;
`

const MenuImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

const MenuTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.secondary};
  margin: 8px 0;
`

const MenuDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.secondary};
  margin-bottom: 8px;
`

const AddButton = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
`

const menuItems = [
  {
    id: 1,
    name: 'Pizza Marguerita',
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: '/pizza.jpg',
    portion: 'Serve de 2 a 3 pessoas',
    price: 60.90
  }
]

const Restaurant = () => {
  const { id } = useParams()

  return (
    <>
      <Header />
      <Banner style={{ backgroundImage: 'url(/restaurant-banner.jpg)' }}>
        <div className="container">
          <BannerContent>
            <Category>Italiana</Category>
            <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
          </BannerContent>
        </div>
      </Banner>
      <MenuSection>
        <div className="container">
          <MenuGrid>
            {menuItems.map((item) => (
              <MenuItem key={item.id}>
                <MenuImage src={item.image} alt={item.name} />
                <MenuTitle>{item.name}</MenuTitle>
                <MenuDescription>{item.description}</MenuDescription>
                <AddButton>Adicionar ao carrinho</AddButton>
              </MenuItem>
            ))}
          </MenuGrid>
        </div>
      </MenuSection>
    </>
  )
}

export default Restaurant