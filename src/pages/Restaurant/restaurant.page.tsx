import styled from 'styled-components'
import { Navigate, useParams } from 'react-router-dom'
import Header from '../../components/Header/header.component'
import { colors } from '../../styles/GlobalStyles'
import { restaurants, type MenuItem } from '../../data/restaurants'
import { useState } from 'react'
import ProductModal from '../../components/Modal/modal.component'
import Cart from '../../components/Carrinho/cart.component'

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

const MenuItemStyle = styled.div`
  background-color: ${colors.primary};
  padding: 8px;
  display: flex;
  flex-direction: column;
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
  flex: 1;
`

const AddButton = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  margin-top: auto;
  
  &:hover {
    opacity: 0.9;
  }
`

const DivContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 56px;
  height: 100%;
`

const Restaurant = () => {
  const { id } = useParams()
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const restaurant = restaurants.find(r => r.id === Number(id))

  if (!restaurant) {
    return <Navigate to="/" replace/>
  }

  const handleOpenModal = (item: MenuItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  return (
    <>
      <Header />
      <Cart />
      <ProductModal 
        isOpen={isModalOpen}
        item={selectedItem}
        onClose={handleCloseModal}
      />
      <Banner style={{ backgroundImage: `url(${restaurant.banner})` }}>
        <DivContainer>
          <BannerContent>
            <Category>{restaurant.category}</Category>
            <RestaurantName>{restaurant.name}</RestaurantName>
          </BannerContent>
        </DivContainer>
      </Banner>
      <MenuSection>
        <div className="container">
          <MenuGrid>
            {restaurant.menu.map((item) => (
              <MenuItemStyle key={item.id}>
                <MenuImage src={item.image} alt={item.name} />
                <MenuTitle>{item.name}</MenuTitle>
                <MenuDescription>{item.description}</MenuDescription>
                <AddButton onClick={() => handleOpenModal(item)}>
                  Mais detalhes
                </AddButton>
              </MenuItemStyle>
            ))}
          </MenuGrid>
        </div>
      </MenuSection>
    </>
  )
}

export default Restaurant