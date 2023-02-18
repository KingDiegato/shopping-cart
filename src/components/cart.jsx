import './styles/cart.css'

import { useId } from 'react'
import { ClearCartIcon, CartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function CartItem({
  description,
  thumbnail,
  title,
  price,
  addToCart,
  quantity
}) {
  return (
    <li>
      <img src={thumbnail} alt={description} />

      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Quantity: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
