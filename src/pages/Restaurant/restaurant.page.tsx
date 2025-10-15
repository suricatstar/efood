import { Navigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../components/Header/header.component'
import { restaurants, type MenuItem } from '../../data/restaurants'
import ProductModal from '../../components/Modal/modal.component'
import Cart from '../../components/Carrinho/cart.component'
import * as S from './restaurant.styles'

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
      <S.Banner style={{ backgroundImage: `url(${restaurant.banner})` }}>
        <S.Container>
          <S.BannerContent>
            <S.Category>{restaurant.category}</S.Category>
            <S.RestaurantName>{restaurant.name}</S.RestaurantName>
          </S.BannerContent>
        </S.Container>
      </S.Banner>
      <S.MenuSection>
        <div className="container">
          <S.MenuGrid>
            {restaurant.menu.map((item) => (
              <S.MenuItem key={item.id}>
                <S.MenuImage src={item.image} alt={item.name} />
                <S.MenuTitle>{item.name}</S.MenuTitle>
                <S.MenuDescription>{item.description}</S.MenuDescription>
                <S.AddButton onClick={() => handleOpenModal(item)}>
                  Mais detalhes
                </S.AddButton>
              </S.MenuItem>
            ))}
          </S.MenuGrid>
        </div>
      </S.MenuSection>
    </>
  )
}

export default Restaurant