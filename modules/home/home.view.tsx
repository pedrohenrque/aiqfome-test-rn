import { FavoriteToggleButton } from '@/components'
import React from 'react'
import { FlatList, View } from 'react-native'
import { products } from './components/ProductCard/product-card.mock'
import ProductCard from './components/ProductCard/product-card.view'
import { styles } from './home.styles'
import { ProductProps } from './home.type'

const mockFavorites = ['1', '4', '5']

export function Home() {
  const [onToggle, setOnToggle] = React.useState(false)

  function handleShowFavorites() {
    setOnToggle((prevStateOnToggle) => !prevStateOnToggle)
  }

  const filteredProducts = React.useMemo(() => {
    if (onToggle) {
      return products.filter((product) => mockFavorites.includes(product.id))
    }
    return products
  }, [onToggle])

  const renderItem = ({ item }: { item: ProductProps }) => (
    <ProductCard
      id={item.id}
      title={item.title}
      price={item.price}
      rating={item.rating}
      imageUrl={item.imageUrl}
      isFavorite={false}
      reviews={item.reviews}
      onToggleFavorite={() => console.log('Toggle favorite')}
    />
  )

  return (
    <View style={styles.container}>
      <FavoriteToggleButton
        onToggle={handleShowFavorites}
        showOnlyFavorites={onToggle}
      />
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.productList}
      />
    </View>
  )
}
