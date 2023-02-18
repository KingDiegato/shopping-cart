import { useState } from 'react'
import { Cart } from './components/cart'
import Header from './components/headers'
import Products from './components/products'
import { CartProvider } from './context/cartContext'
import { useFilter } from './hooks/useFilter'
import { products } from './mocks/products.json'

function App() {
  const [product] = useState(products)

  const { filterProducts } = useFilter()

  const filterSystem = filterProducts(product)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filterSystem} />
    </CartProvider>
  )
}

export default App
