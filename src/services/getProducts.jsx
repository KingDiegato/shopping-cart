import { AddToCartIcon, RemoveFromCartIcon } from '../components/Icons'
import { useCart } from '../hooks/useCart'
import { useFetch } from '../hooks/useFetch'
import { useFilter } from '../hooks/useFilter'

const PRODUCTS_ENDPOINT = 'https://dummyjson.com/products'

export function ProductsList() {
  const { data, loading } = useFetch(PRODUCTS_ENDPOINT)

  const { addToCart, cart, removeFromCart } = useCart()

  const { filterProducts } = useFilter()

  const filterSystem = filterProducts(data)

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }
  return (
    <ul>
      {loading && <p>Loading products...</p>}
      {filterSystem?.slice(0, 6).map((product) => {
        const isProductInCart = checkProductInCart(product)
        return (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.description} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button
                style={
                  isProductInCart
                    ? { backgroundColor: '#E75A5A' }
                    : { backgroundColor: 'green' }
                }
                onClick={() =>
                  isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product)
                }
              >
                {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
