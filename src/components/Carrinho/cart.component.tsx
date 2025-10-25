import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { removeFromCart, clearCart, toggleCart } from '../../store/reducers/cart.slice'
import { useState } from 'react'
import type { DeliveryInfo, PaymentInfo } from '../../types/checkout.types'
import * as S from './cart.styles'
import { CiTrash } from "react-icons/ci"

const Cart = () => {
  // LER dados do Redux
  const items = useAppSelector(state => state.cart.items)
  const isOpen = useAppSelector(state => state.cart.isOpen)
  
  // FAZER ações no Redux
  const dispatch = useAppDispatch()
  
  // Estado local para formulários
  const [currentStep, setCurrentStep] = useState<'cart' | 'delivery' | 'payment' | 'confirmation'>('cart')
  const [delivery, setDelivery] = useState<DeliveryInfo>({
    receiver: '',
    address: '',
    city: '',
    zipCode: '',
    number: '',
    complement: ''
  })
  const [payment, setPayment] = useState<PaymentInfo>({
    cardName: '',
    cardNumber: '',
    cardCode: '',
    expiresMonth: '',
    expiresYear: ''
  })

  // CALCULAR TOTAL
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.preco * item.quantity, 0)
  }

  // HANDLERS (funções que fazem coisas)
  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id)) // Dispara a ação de remover
  }

  const handleToggleCart = () => {
    dispatch(toggleCart()) // Dispara a ação de abrir/fechar
  }

  const handleClearCart = () => {
    dispatch(clearCart()) // Dispara a ação de limpar
  }

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('payment')
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('confirmation')
  }

  return (
    <>
      <S.Overlay $isOpen={isOpen} onClick={handleToggleCart} />
      <S.Sidebar $isOpen={isOpen}>
        {/* ETAPA 1: CARRINHO */}
        {currentStep === 'cart' && (
          <>
            {items.length === 0 ? (
              <S.EmptyCart>
                O carrinho está vazio. Adicione produtos para continuar com a compra.
              </S.EmptyCart>
            ) : (
              <>
                {items.map((item) => (
                  <S.CartItem key={item.id}>
                    <S.CartItemImage src={item.foto} alt={item.nome} />
                    <S.CartItemInfo>
                      <S.CartItemTitle>{item.nome}</S.CartItemTitle>
                      <S.CartItemPrice>R$ {item.preco.toFixed(2)}</S.CartItemPrice>
                      {item.quantity > 1 && (
                        <S.CartItemPrice>Quantidade: {item.quantity}</S.CartItemPrice>
                      )}
                    </S.CartItemInfo>
                    <S.RemoveButton onClick={() => handleRemoveItem(item.id)}>
                      <CiTrash size={24} />
                    </S.RemoveButton>
                  </S.CartItem>
                ))}
                <S.TotalPrice>
                  <span>Valor total</span>
                  <span>R$ {getTotalPrice().toFixed(2)}</span>
                </S.TotalPrice>
                <S.Button onClick={() => setCurrentStep('delivery')}>
                  Continuar com a entrega
                </S.Button>
              </>
            )}
          </>
        )}

        {/* ETAPA 2: ENTREGA */}
        {currentStep === 'delivery' && (
          <>
            <S.FormTitle>Entrega</S.FormTitle>
            <S.Form onSubmit={handleDeliverySubmit}>
              <S.Label htmlFor="receiver">Quem irá receber</S.Label>
              <S.Input
                type="text"
                id="receiver"
                value={delivery.receiver}
                onChange={(e) => setDelivery({ ...delivery, receiver: e.target.value })}
                required
              />

              <S.Label htmlFor="address">Endereço</S.Label>
              <S.Input
                type="text"
                id="address"
                value={delivery.address}
                onChange={(e) => setDelivery({ ...delivery, address: e.target.value })}
                required
              />

              <S.Label htmlFor="city">Cidade</S.Label>
              <S.Input
                type="text"
                id="city"
                value={delivery.city}
                onChange={(e) => setDelivery({ ...delivery, city: e.target.value })}
                required
              />

              <S.InputRow>
                <S.InputGroup>
                  <S.Label htmlFor="zipCode">CEP</S.Label>
                  <S.Input
                    type="text"
                    id="zipCode"
                    value={delivery.zipCode}
                    onChange={(e) => setDelivery({ ...delivery, zipCode: e.target.value })}
                    maxLength={9}
                    required
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <S.Label htmlFor="number">Número</S.Label>
                  <S.Input
                    type="text"
                    id="number"
                    value={delivery.number}
                    onChange={(e) => setDelivery({ ...delivery, number: e.target.value })}
                    required
                  />
                </S.InputGroup>
              </S.InputRow>

              <S.Label htmlFor="complement">Complemento (opcional)</S.Label>
              <S.Input
                type="text"
                id="complement"
                value={delivery.complement}
                onChange={(e) => setDelivery({ ...delivery, complement: e.target.value })}
              />

              <S.Button type="submit">Continuar com o pagamento</S.Button>
              <S.Button type="button" onClick={() => setCurrentStep('cart')}>
                Voltar para o carrinho
              </S.Button>
            </S.Form>
          </>
        )}

        {/* ETAPA 3: PAGAMENTO */}
        {currentStep === 'payment' && (
          <>
            <S.FormTitle>Pagamento - Valor a pagar R$ {getTotalPrice().toFixed(2)}</S.FormTitle>
            <S.Form onSubmit={handlePaymentSubmit}>
              <S.Label htmlFor="cardName">Nome no cartão</S.Label>
              <S.Input
                type="text"
                id="cardName"
                value={payment.cardName}
                onChange={(e) => setPayment({ ...payment, cardName: e.target.value })}
                required
              />

              <S.InputRow>
                <S.InputGroup>
                  <S.Label htmlFor="cardNumber">Número do cartão</S.Label>
                  <S.Input
                    type="text"
                    id="cardNumber"
                    value={payment.cardNumber}
                    onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                    maxLength={16}
                    required
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <S.Label htmlFor="cardCode">CVV</S.Label>
                  <S.Input
                    type="text"
                    id="cardCode"
                    value={payment.cardCode}
                    onChange={(e) => setPayment({ ...payment, cardCode: e.target.value })}
                    maxLength={3}
                    required
                  />
                </S.InputGroup>
              </S.InputRow>

              <S.InputRow>
                <S.InputGroup>
                  <S.Label htmlFor="expiresMonth">Mês de vencimento</S.Label>
                  <S.Input
                    type="text"
                    id="expiresMonth"
                    value={payment.expiresMonth}
                    onChange={(e) => setPayment({ ...payment, expiresMonth: e.target.value })}
                    maxLength={2}
                    placeholder="MM"
                    required
                  />
                </S.InputGroup>

                <S.InputGroup>
                  <S.Label htmlFor="expiresYear">Ano de vencimento</S.Label>
                  <S.Input
                    type="text"
                    id="expiresYear"
                    value={payment.expiresYear}
                    onChange={(e) => setPayment({ ...payment, expiresYear: e.target.value })}
                    maxLength={4}
                    placeholder="AAAA"
                    required
                  />
                </S.InputGroup>
              </S.InputRow>

              <S.Button type="submit">Finalizar pagamento</S.Button>
              <S.Button type="button" onClick={() => setCurrentStep('delivery')}>
                Voltar para a edição de endereço
              </S.Button>
            </S.Form>
          </>
        )}

        {/* ETAPA 4: CONFIRMAÇÃO */}
        {currentStep === 'confirmation' && (
          <>
            <S.FormTitle>Pedido realizado - ORDER_12345</S.FormTitle>
            <S.ConfirmationText>
              Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
            </S.ConfirmationText>
            <S.ConfirmationText>
              Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
            </S.ConfirmationText>
            <S.ConfirmationText>
              Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
            </S.ConfirmationText>
            <S.ConfirmationText>
              Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </S.ConfirmationText>
            <S.Button onClick={() => {
              handleClearCart()
              handleToggleCart()
            }}>
              Concluir
            </S.Button>
          </>
        )}
      </S.Sidebar>
    </>
  )
}

export default Cart