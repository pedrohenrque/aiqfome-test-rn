import { asyncStorage } from '@/infra/AsyncStorage'
import { ProductService } from '@/services/Products/product-service'
import { ProductProps } from '@/services/Products/product.type'
import React from 'react'

export function useProductController() {
  const [onToggle, setOnToggle] = React.useState(false)
  const [products, setProducts] = React.useState<ProductProps[]>([])
  const productService = React.useMemo(
    () => new ProductService(asyncStorage),
    []
  )

  async function fetchProducts() {
    const productService = new ProductService(asyncStorage)
    const data = await productService.getProducts()

    setProducts(data)
  }

  React.useEffect(() => {
    fetchProducts()
  }, [])

  async function handleShowFavorites() {
    setOnToggle((prevState) => !prevState)

    if (!onToggle) {
      try {
        const favs = await productService.getFavoriteProducts()
        setProducts(favs)
      } catch (error) {
        console.error('Failed to get favorites:', error)
      }
    } else {
      fetchProducts()
    }
  }

  async function toggleFavorite(favoriteProduct: ProductProps) {
    const updatedProducts = await productService.toggleFavorite(favoriteProduct)
    setProducts(updatedProducts)

    if (onToggle) {
      const favs = await productService.getFavoriteProducts()
      setProducts(favs)
    }
  }

  return {
    products,
    onToggle,
    handleShowFavorites,
    toggleFavorite
  }
}
