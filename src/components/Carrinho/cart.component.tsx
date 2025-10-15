import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'
import { useCart } from '../../contexts/cart.context'
import { useState } from 'react'
import type { DeliveryInfo, PaymentInfo } from '../../types/checkout.types'

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.$isOpen ? 'block' : 'none')};
  z-index: 999;
`

const Sidebar = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$isOpen ? '0' : '-360px')};
  width: 360px;
  height: 100%;
  background-color: ${colors.primary};
  padding: 32px 8px;
  z-index: 1000;
  transition: right 0.3s ease-in-out;
  overflow-y: auto;
`

const CartItem = styled.div`
  background-color: ${colors.secondary};
  padding: 8px;
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
  position: relative;
`

const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

const CartItemInfo = styled.div`
  flex: 1;
`

const CartItemTitle = styled.h4`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};
  margin-bottom: 16px;
`

const CartItemPrice = styled.p`
  font-size: 14px;
  color: ${colors.primary};
  font-weight: 400;
`

const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.primary};
  font-size: 16px;
  
  &:hover {
    opacity: 0.7;
  }
`

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.secondary};
  font-size: 14px;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 16px;
`

const Button = styled.button`
  width: 100%;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 4px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-bottom: 8px;
  
  &:hover {
    opacity: 0.9;
  }
`

const EmptyCart = styled.p`
  color: ${colors.secondary};
  text-align: center;
  font-size: 14px;
  margin-top: 100px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const FormTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.secondary};
  margin-bottom: 16px;
`

const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.secondary};
  margin-bottom: 8px;
`

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.dark};
  background-color: ${colors.secondary};
  border: none;
  margin-bottom: 8px;
  
  &::placeholder {
    color: ${colors.dark};
  }
`

const InputRow = styled.div`
  display: flex;
  gap: 34px;
  
  > div {
    flex: 1;
  }
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const ConfirmationText = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.secondary};
  margin-bottom: 24px;
`

const OrderId = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.secondary};
  margin-bottom: 24px;
`

const Cart = () => {
  const { 
    items, 
    isOpen, 
    currentStep,
    removeFromCart, 
    toggleCart, 
    getTotalPrice,
    setStep,
    setDeliveryInfo,
    setPaymentInfo,
    finishOrder,
    clearCart
  } = useCart()

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

  const handleDeliverySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDeliveryInfo(delivery)
    setStep('payment')
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPaymentInfo(payment)
    finishOrder()
  }

  const handleBackToCart = () => {
    setStep('cart')
  }

  const handleBackToDelivery = () => {
    setStep('delivery')
  }

  const handleFinish = () => {
    clearCart()
    toggleCart()
  }

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={toggleCart} />
      <Sidebar $isOpen={isOpen}>
        {/* ETAPA 1: CARRINHO */}
        {currentStep === 'cart' && (
          <>
            {items.length === 0 ? (
              <EmptyCart>
                O carrinho está vazio. Adicione produtos para continuar com a compra.
              </EmptyCart>
            ) : (
              <>
                {items.map((item) => (
                  <CartItem key={item.id}>
                    <CartItemImage src={item.image} alt={item.name} />
                    <CartItemInfo>
                      <CartItemTitle>{item.name}</CartItemTitle>
                      <CartItemPrice>R$ {item.price.toFixed(2)}</CartItemPrice>
                    </CartItemInfo>
                    <RemoveButton onClick={() => removeFromCart(item.id)}>
                      🗑️
                    </RemoveButton>
                  </CartItem>
                ))}
                <TotalPrice>
                  <span>Valor total</span>
                  <span>R$ {getTotalPrice().toFixed(2)}</span>
                </TotalPrice>
                <Button onClick={() => setStep('delivery')}>
                  Continuar com a entrega
                </Button>
              </>
            )}
          </>
        )}

        {/* ETAPA 2: ENTREGA */}
        {currentStep === 'delivery' && (
          <>
            <FormTitle>Entrega</FormTitle>
            <Form onSubmit={handleDeliverySubmit}>
              <Label htmlFor="receiver">Quem irá receber</Label>
              <Input
                type="text"
                id="receiver"
                value={delivery.receiver}
                onChange={(e) => setDelivery({ ...delivery, receiver: e.target.value })}
                required
              />

              <Label htmlFor="address">Endereço</Label>
              <Input
                type="text"
                id="address"
                value={delivery.address}
                onChange={(e) => setDelivery({ ...delivery, address: e.target.value })}
                required
              />

              <Label htmlFor="city">Cidade</Label>
              <Input
                type="text"
                id="city"
                value={delivery.city}
                onChange={(e) => setDelivery({ ...delivery, city: e.target.value })}
                required
              />

              <InputRow>
                <InputGroup>
                  <Label htmlFor="zipCode">CEP</Label>
                  <Input
                    type="text"
                    id="zipCode"
                    value={delivery.zipCode}
                    onChange={(e) => setDelivery({ ...delivery, zipCode: e.target.value })}
                    maxLength={9}
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="number">Número</Label>
                  <Input
                    type="text"
                    id="number"
                    value={delivery.number}
                    onChange={(e) => setDelivery({ ...delivery, number: e.target.value })}
                    required
                  />
                </InputGroup>
              </InputRow>

              <Label htmlFor="complement">Complemento (opcional)</Label>
              <Input
                type="text"
                id="complement"
                value={delivery.complement}
                onChange={(e) => setDelivery({ ...delivery, complement: e.target.value })}
              />

              <Button type="submit">Continuar com o pagamento</Button>
              <Button type="button" onClick={handleBackToCart}>
                Voltar para o carrinho
              </Button>
            </Form>
          </>
        )}

        {/* ETAPA 3: PAGAMENTO */}
        {currentStep === 'payment' && (
          <>
            <FormTitle>Pagamento - Valor a pagar R$ {getTotalPrice().toFixed(2)}</FormTitle>
            <Form onSubmit={handlePaymentSubmit}>
              <Label htmlFor="cardName">Nome no cartão</Label>
              <Input
                type="text"
                id="cardName"
                value={payment.cardName}
                onChange={(e) => setPayment({ ...payment, cardName: e.target.value })}
                required
              />

              <InputRow>
                <InputGroup>
                  <Label htmlFor="cardNumber">Número do cartão</Label>
                  <Input
                    type="text"
                    id="cardNumber"
                    value={payment.cardNumber}
                    onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
                    maxLength={16}
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="cardCode">CVV</Label>
                  <Input
                    type="text"
                    id="cardCode"
                    value={payment.cardCode}
                    onChange={(e) => setPayment({ ...payment, cardCode: e.target.value })}
                    maxLength={3}
                    required
                  />
                </InputGroup>
              </InputRow>

              <InputRow>
                <InputGroup>
                  <Label htmlFor="expiresMonth">Mês de vencimento</Label>
                  <Input
                    type="text"
                    id="expiresMonth"
                    value={payment.expiresMonth}
                    onChange={(e) => setPayment({ ...payment, expiresMonth: e.target.value })}
                    maxLength={2}
                    placeholder="MM"
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="expiresYear">Ano de vencimento</Label>
                  <Input
                    type="text"
                    id="expiresYear"
                    value={payment.expiresYear}
                    onChange={(e) => setPayment({ ...payment, expiresYear: e.target.value })}
                    maxLength={4}
                    placeholder="AAAA"
                    required
                  />
                </InputGroup>
              </InputRow>

              <Button type="submit">Finalizar pagamento</Button>
              <Button type="button" onClick={handleBackToDelivery}>
                Voltar para a edição de endereço
              </Button>
            </Form>
          </>
        )}

        {/* ETAPA 4: CONFIRMAÇÃO */}
        {currentStep === 'confirmation' && (
          <>
            <FormTitle>Pedido realizado - ORDER_ID_12345</FormTitle>
            <ConfirmationText>
              Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
            </ConfirmationText>
            <ConfirmationText>
              Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
            </ConfirmationText>
            <ConfirmationText>
              Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
            </ConfirmationText>
            <ConfirmationText>
              Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </ConfirmationText>
            <Button onClick={handleFinish}>Concluir</Button>
          </>
        )}
      </Sidebar>
    </>
  )
}

export default Cart