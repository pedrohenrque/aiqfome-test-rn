import { FavoriteToggleButton } from '@/components'
import { ProductProps } from '@/services/Products/product.type'
import React from 'react'
import { FlatList, View } from 'react-native'
import { ProductCard } from './components'
import { styles } from './product.styles'
import { IProduct } from './product.type'

export function ProductView(props: IProduct) {
  const { handleShowFavorites, onToggle, products, toggleFavorite } = props

  return (
    <View style={styles.container}>
      <FavoriteToggleButton
        onToggle={handleShowFavorites}
        showOnlyFavorites={onToggle}
      />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={styles.productList}
        renderItem={({ item }: { item: ProductProps }) => (
          <ProductCard
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            imageUrl={item.imageUrl}
            isFavorite={item.isFavorite}
            reviews={item.reviews}
            onToggleFavorite={() => toggleFavorite(item)}
          />
        )}
      />
    </View>
  )
}
