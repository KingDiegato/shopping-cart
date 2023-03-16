import { useContext } from 'react'
import { CartContext } from '../context/cartContext'

export function useCart() {
  const context = useContext(CartContext)

  // revisar si el contexto es undefined
  if (context === undefined) {
    throw new Error('useCart Must be used withing a CartProvider')
  }

  return context
}
