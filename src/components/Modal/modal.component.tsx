import type { MenuItem } from '../../types/api.types'
import { useAppDispatch } from '../../store/hooks'
import { addToCart } from '../../store/reducers/cart.slice'
import * as S from './modal.styles'

type ProductModalProps = {
  isOpen: boolean
  item: MenuItem | null
  onClose: () => void
}

const ProductModal = ({ isOpen, item, onClose }: ProductModalProps) => {
  const dispatch = useAppDispatch()

  if (!item) return null

  const handleAddToCart = () => {
    dispatch(addToCart(item)) // Adiciona ao Redux
    onClose()
  }

  return (
    <S.Overlay $isOpen={isOpen} onClick={onClose}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>✕</S.CloseButton>
        <S.ModalImage src={item.foto} alt={item.nome} />
        <S.ModalContent>
          <S.ModalTitle>{item.nome}</S.ModalTitle>
          <S.ModalDescription>{item.descricao}</S.ModalDescription>
          <S.ModalPortion>Serve: {item.porcao}</S.ModalPortion>
          <S.AddToCartButton onClick={handleAddToCart}>
            Adicionar ao carrinho - R$ {item.preco.toFixed(2)}
          </S.AddToCartButton>
        </S.ModalContent>
      </S.ModalContainer>
    </S.Overlay>
  )
}

export default ProductModal