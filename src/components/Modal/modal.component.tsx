import type { MenuItem } from '../../data/restaurants'
import { useCart } from '../../contexts/cart.context'
import * as S from './modal.styles'

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
    <S.Overlay $isOpen={isOpen} onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>✕</S.CloseButton>
        <S.ModalImage src={item.image} alt={item.name} />
        <S.ModalContent>
          <S.ModalTitle>{item.name}</S.ModalTitle>
          <S.ModalDescription>{item.description}</S.ModalDescription>
          <S.ModalPortion>Serve: {item.portion}</S.ModalPortion>
          <S.AddToCartButton onClick={handleAddToCart}>
            Adicionar ao carrinho - R$ {item.price.toFixed(2)}
          </S.AddToCartButton>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Overlay>
  )
}

export default ProductModal