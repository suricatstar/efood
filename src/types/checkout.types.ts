export type DeliveryInfo = {
  receiver: string
  address: string
  city: string
  zipCode: string
  number: string
  complement?: string
}

export type PaymentInfo = {
  cardName: string
  cardNumber: string
  cardCode: string
  expiresMonth: string
  expiresYear: string
}

export type CheckoutStep = 'cart' | 'delivery' | 'payment' | 'confirmation'

export type OrderConfirmation = {
  orderId: string
  isLoading: boolean
  error: string | null
}