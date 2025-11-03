import type { DeliveryInfo, PaymentInfo } from '../types/checkout.types'

const API_URL = 'https://api-ebac.vercel.app/api/efood/checkout'

type CheckoutRequest = {
  products: Array<{
    id: number
    price: number
  }>
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type CheckoutResponse = {
  orderId: string
}

export const createOrder = async (
  products: Array<{ id: number; price: number }>,
  delivery: DeliveryInfo,
  payment: PaymentInfo
): Promise<CheckoutResponse> => {
  try {
    const requestBody: CheckoutRequest = {
      products,
      delivery: {
        receiver: delivery.receiver,
        address: {
          description: delivery.address,
          city: delivery.city,
          zipCode: delivery.zipCode,
          number: Number(delivery.number),
          complement: delivery.complement
        }
      },
      payment: {
        card: {
          name: payment.cardName,
          number: payment.cardNumber,
          code: Number(payment.cardCode),
          expires: {
            month: Number(payment.expiresMonth),
            year: Number(payment.expiresYear)
          }
        }
      }
    }

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })

    if (!response.ok) {
      throw new Error('Erro ao finalizar pedido')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Erro:', error)
    throw error
  }
}