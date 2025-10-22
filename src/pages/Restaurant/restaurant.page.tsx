import { Navigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../../components/Header/header.component'
import { fetchRestaurantById } from '../../services/restaurantApi'
import type { Restaurant as RestaurantType, MenuItem } from '../../types/api.types'
import ProductModal from '../../components/Modal/modal.component'
import Cart from '../../components/Carrinho/cart.component'
import * as S from './restaurant.styles'

const Restaurant = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<RestaurantType | null>(null)
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const loadRestaurant = async () => {
      try {
        setLoading(true)
        const data = await fetchRestaurantById(Number(id))
        setRestaurant(data)
      } catch (err) {
        setError(true)
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      loadRestaurant()
    }
  }, [id])

  const handleOpenModal = (item: MenuItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  if (loading) {
    return (
      <>
        <Header />
        <S.LoadingContainer>
          <S.LoadingMessage>Carregando...</S.LoadingMessage>
        </S.LoadingContainer>
      </>
    )
  }

  if (error || !restaurant) {
    return <Navigate to="/" replace/>
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
      <S.Banner style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <S.Container>
          <S.BannerContent>
            <S.Category>{restaurant.tipo}</S.Category>
            <S.RestaurantName>{restaurant.titulo}</S.RestaurantName>
          </S.BannerContent>
        </S.Container>
      </S.Banner>
      <S.MenuSection>
        <div className="container">
          <S.MenuGrid>
            {restaurant.cardapio.map((item) => (
              <S.MenuItem key={item.id}>
                <S.MenuImage src={item.foto} alt={item.nome} />
                <S.MenuTitle>{item.nome}</S.MenuTitle>
                <S.MenuDescription>{item.descricao}</S.MenuDescription>
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