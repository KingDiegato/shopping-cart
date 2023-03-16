import { Cart } from './components/cart'
import Header from './components/headers'
import Products from './components/products'
import { CartProvider } from './context/cartContext'
import { FiltersProvider } from './context/filtersContext'

function App() {
  return (
    <>
      <FiltersProvider>
        <Header />
        <CartProvider>
          <Cart />
          <Products />
        </CartProvider>
      </FiltersProvider>
    </>
  )
}

export default App
