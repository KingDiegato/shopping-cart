export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []
const clearCart = []

export const updateLocalStorage = (state) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

// reduce el estado a partir de una acción
export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex((item) => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocalStorage(newState)
        return newState
      }
      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
      updateLocalStorage(newState)
      return newState
    }
    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      const newState = state.filter((item) => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }
    case 'CLEAR_CART': {
      updateLocalStorage(clearCart)
      return clearCart
    }
    default: {
      return state
    }
  }
}
