import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ExpoIcon } from './ExpoIcon'

interface FavoriteToggleButtonProps {
  showOnlyFavorites: boolean
  onToggle: () => void
}

export function FavoriteToggleButton({
  showOnlyFavorites,
  onToggle
}: FavoriteToggleButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onToggle}>
      <ExpoIcon
        iconSet="Ionicons"
        name={showOnlyFavorites ? 'heart' : 'heart-outline'}
        size={20}
        color={showOnlyFavorites ? 'red' : '#444'}
        style={styles.icon}
      />
      <Text style={styles.text}>
        {showOnlyFavorites
          ? 'Mostrar todos os Produtos'
          : 'Mostrar somente favoritos'}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 24,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  icon: {
    marginRight: 6
  },
  text: {
    fontSize: 14,
    fontWeight: '500'
  }
})
