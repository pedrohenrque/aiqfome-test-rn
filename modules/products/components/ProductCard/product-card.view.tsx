import { ExpoIcon } from '@/components'
import { ProductProps } from '@/services/Products/product.type'
import { formatCurrencyToBRL } from '@/utils/formatCurrencyToBRL'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './product-card.styles'

interface ProductCardProps extends ProductProps {
  onToggleFavorite?: () => void
  isFavorite?: boolean
}

export function ProductCard(props: ProductCardProps) {
  const {
    title,
    price,
    rating,
    reviews,
    imageUrl,
    onToggleFavorite,
    isFavorite = false
  } = props

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <TouchableOpacity style={styles.heartIcon} onPress={onToggleFavorite}>
          <ExpoIcon
            iconSet="Ionicons"
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={20}
            color="red"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.row}>
          <Text style={styles.rating}>
            <Text style={{ fontWeight: 'bold' }}>{rating}</Text> {reviews}
          </Text>
          <View style={styles.priceTag}>
            <Text style={styles.priceText}>{formatCurrencyToBRL(price)}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
