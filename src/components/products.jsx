import './styles/products.css'
import { SearchProducts } from '../services/searchProducts'

export default function Products() {
  return (
    <main className='products'>
      <div>
        <SearchProducts />
      </div>
    </main>
  )
}
