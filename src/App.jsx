import { Cart } from './components/cart'
import Header from './components/headers'
import Products from './components/products'
import { CartProvider } from './context/cartContext'

function App() {
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products />
    </CartProvider>
  )
}

export default App
