import { IStorageService } from '@/infra/AsyncStorage'
import mockProducts from './product.mock.json'
import { ProductProps } from './product.type'

export class ProductService {
  private readonly URL = 'https://fakestoreapi.com/products'
  private readonly PRODUCTS_KEY = 'PRODUCTS_KEY'

  constructor(private readonly asyncStorage: IStorageService) {}

  async getProducts(): Promise<ProductProps[]> {
    try {
      // const response = await fetch(this.URL)
      // if (!response.ok) {
      //   throw new Error(`HTTP error! Status: ${response.status}`)
      // }

      // const data: Product[] = response.json()
      const storedProducts = await this.asyncStorage.getItem<ProductProps[]>(
        this.PRODUCTS_KEY
      )

      if (storedProducts && storedProducts.length) {
        return storedProducts
      }

      return mockProducts
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  }

  async getFavoriteProducts(): Promise<ProductProps[]> {
    const products = await this.getProducts()
    return products.filter((product) => product.isFavorite)
  }

  async toggleFavorite(product: ProductProps) {
    const products = await this.getProducts()

    const updatedProducts = products.map((p) => {
      if (p.id === product.id) {
        return { ...p, isFavorite: !p.isFavorite }
      }
      return p
    })

    await this.asyncStorage.setItem(this.PRODUCTS_KEY, updatedProducts)

    return updatedProducts
  }
}
