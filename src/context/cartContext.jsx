import { createContext, useReducer } from 'react'
import { initialState, reducer } from '../reducer/cartReducer'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, initialState)

  const addToCart = (product) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: product
    })
  const removeFromCart = (product) =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product
    })
  const clearCart = () =>
    dispatch({
      type: 'CLEAR_CART'
    })
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
