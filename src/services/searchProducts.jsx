import React, { useState, useRef } from 'react'
import { AddToCartIcon, RemoveFromCartIcon } from '../components/Icons'
import { useCart } from '../hooks/useCart'
import { useFetch } from '../hooks/useFetch'
import { useFilter } from '../hooks/useFilter'

export const SearchProducts = () => {
  const [searchValue, setSearchValue] = useState('')
  const { addToCart, cart, removeFromCart } = useCart()

  const { filterProducts } = useFilter()

  const checkProductInCartFromSearch = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  const queryValue = useRef()
  const handleSearch = (e) => {
    e.preventDefault()
    const newValue = queryValue.current.value
    console.log(newValue)
    setSearchValue(newValue)
  }
  const PRODUCTS_ENDPOINT_SEARCH = `https://dummyjson.com/products/search?q=${searchValue}`
  const { data: searchData, loading: loadingSearch } = useFetch(PRODUCTS_ENDPOINT_SEARCH)
  const filterSearchSystem = filterProducts(searchData)

  return (
    <>
      <form>
        <label htmlFor='search-query'>
          Search a product
        </label>
        <br />
        <input ref={queryValue} id='search-query' type='text' placeholder='laptop... phones...' />
        <button type='submit' onClick={handleSearch}>Search</button>
      </form>
      <ul className='ul-search'>
        {loadingSearch && <p>Searching the request</p>}
        {filterSearchSystem?.map(products => {
          const isProductSearchedInCart = checkProductInCartFromSearch(products)
          return (
            <li key={products.id} className='li-search'>
              <img src={products.thumbnail} alt={products.description} className='li-img' />
              <div>
                <strong>{products.title}</strong> - ${products.price}
              </div>
              <div>
                <button
                  style={
                    isProductSearchedInCart
                      ? { backgroundColor: '#E75A5A' }
                      : { backgroundColor: 'green' }
                  }
                  onClick={() =>
                    isProductSearchedInCart
                      ? removeFromCart(products)
                      : addToCart(products)
                  }
                >
                  {isProductSearchedInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
