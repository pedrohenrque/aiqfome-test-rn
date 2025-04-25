import { ProductProps } from '@/services/Products/product.type'

export interface IProduct {
  handleShowFavorites: () => void
  onToggle: boolean
  products: ProductProps[]
  toggleFavorite(product: ProductProps): void
}
