import { useProductController } from './product.controller'
import { ProductView } from './product.view'

export function Home() {
  const methods = useProductController()

  return <ProductView {...methods} />
}
