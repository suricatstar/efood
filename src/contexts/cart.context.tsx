import { createContext, useContext, useState, type ReactNode } from 'react'
import type { MenuItem } from '../types/api.types'
import type { DeliveryInfo, PaymentInfo, CheckoutStep } from '../types/checkout.types'

type CartItem = MenuItem & {
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  isOpen: boolean
  currentStep: CheckoutStep
  deliveryInfo: DeliveryInfo | null
  paymentInfo: PaymentInfo | null
  addToCart: (item: MenuItem) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  toggleCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
  setStep: (step: CheckoutStep) => void
  setDeliveryInfo: (info: DeliveryInfo) => void
  setPaymentInfo: (info: PaymentInfo) => void
  finishOrder: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState<CheckoutStep>('cart')
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo | null>(null)
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null)

  const addToCart = (item: MenuItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      
      return [...prevItems, { ...item, quantity: 1 }]
    })
    setIsOpen(true)
  }

  const removeFromCart = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setItems([])
    setCurrentStep('cart')
    setDeliveryInfo(null)
    setPaymentInfo(null)
  }

  const toggleCart = () => {
    setIsOpen(!isOpen)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.preco * item.quantity, 0)
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const setStep = (step: CheckoutStep) => {
    setCurrentStep(step)
  }

  const finishOrder = () => {
    setCurrentStep('confirmation')
  }

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        currentStep,
        deliveryInfo,
        paymentInfo,
        addToCart,
        removeFromCart,
        clearCart,
        toggleCart,
        getTotalPrice,
        getTotalItems,
        setStep,
        setDeliveryInfo,
        setPaymentInfo,
        finishOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}