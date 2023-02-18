const PRODUCTS_ENDPOINT = 'https://dummyjson.com/products'

export async function getProducts() {
  const productList = await fetch(PRODUCTS_ENDPOINT)
  const data = await productList.json()

  const { list } = data

  return list?.map((product) => ({
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    thumbnail: product.thumbnail,
    brand: product.brand
  }))
}
