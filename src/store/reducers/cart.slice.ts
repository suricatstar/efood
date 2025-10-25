import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { MenuItem } from '../../types/api.types'

// 1. DEFINIR O TIPO DO ITEM NO CARRINHO
// Pega os dados do MenuItem e adiciona quantity (quantidade)
type CartItem = MenuItem & {
  quantity: number
}

// 2. DEFINIR O ESTADO INICIAL
// Como o carrinho começa: vazio
type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

// 3. CRIAR O SLICE (a "gaveta" do carrinho)
const cartSlice = createSlice({
  name: 'cart', // Nome da gaveta
  initialState, // Estado inicial
  
  // 4. DEFINIR AS AÇÕES (o que pode fazer com o carrinho)
  reducers: {
    // ADICIONAR ITEM
    addToCart: (state, action: PayloadAction<MenuItem>) => {
      const item = action.payload // O item que queremos adicionar
      
      // Verificar se o item já existe no carrinho
      const existingItem = state.items.find(i => i.id === item.id)
      
      if (existingItem) {
        // Se já existe, aumenta a quantidade
        existingItem.quantity += 1
      } else {
        // Se não existe, adiciona com quantidade 1
        state.items.push({ ...item, quantity: 1 })
      }
      
      // Abre o carrinho automaticamente
      state.isOpen = true
    },
    
    // REMOVER ITEM
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload // ID do item a remover
      state.items = state.items.filter(item => item.id !== id)
    },
    
    // LIMPAR CARRINHO
    clearCart: (state) => {
      state.items = []
      state.isOpen = false
    },
    
    // ABRIR/FECHAR CARRINHO
    toggleCart: (state) => {
      state.isOpen = !state.isOpen
    }
  }
})

// 5. EXPORTAR AS AÇÕES E O REDUCER
export const { addToCart, removeFromCart, clearCart, toggleCart } = cartSlice.actions
export default cartSlice.reducer