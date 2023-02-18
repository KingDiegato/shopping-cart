import { useState, useCallback } from 'react'
import { getProducts } from '../services/products'

export function useProducts() {
  const [product, setProduct] = useState([])
  const productList = useCallback(async () => {
    try {
      const productList = await getProducts()
      setProduct(productList)
    } catch (e) {
      console.error(e.message)
    }
  })
  return { product, productList }
}
