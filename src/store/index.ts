import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart.slice'

// CRIAR O COFRE com todas as gavetas
export const store = configureStore({
  reducer: {
    cart: cartReducer // Gaveta do carrinho
  }
})

// TIPOS para TypeScript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch