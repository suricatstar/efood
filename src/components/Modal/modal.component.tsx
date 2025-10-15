import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'
import type { MenuItem } from '../../data/restaurants'
import { useCart } from '../../contexts/cart.context'

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1001;
`

const ModalContainer = styled.div`
  background-color: ${colors.primary};
  max-width: 1024px;
  width: 100%;
  margin: 0 16px;
  position: relative;
  padding: 32px;
  display: flex;
  gap: 24px;
`

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: ${colors.white};
  font-size: 24px;
  cursor: pointer;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.7;
  }
`

const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

const ModalContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.white};
  margin-bottom: 16px;
`

const ModalDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.white};
  margin-bottom: 16px;
`

const ModalPortion = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.white};
  margin-bottom: 16px;
`

const AddToCartButton = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-top: auto;
  
  &:hover {
    opacity: 0.9;
  }
`

type ProductModalProps = {
  isOpen: boolean
  item: MenuItem | null
  onClose: () => void
}

const ProductModal = ({ isOpen, item, onClose }: ProductModalProps) => {
  const { addToCart } = useCart()

  if (!item) return null

  const handleAddToCart = () => {
    addToCart(item)
    onClose()
  }

  return (
    <Overlay $isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <ModalImage src={item.image} alt={item.name} />
        <ModalContent>
          <ModalTitle>{item.name}</ModalTitle>
          <ModalDescription>{item.description}</ModalDescription>
          <ModalPortion>Serve: {item.portion}</ModalPortion>
          <AddToCartButton onClick={handleAddToCart}>
            Adicionar ao carrinho - R$ {item.price.toFixed(2)}
          </AddToCartButton>
        </ModalContent>
      </ModalContainer>
    </Overlay>
  )
}

export default ProductModal