import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

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
      <Ionicons
        name={showOnlyFavorites ? 'heart' : 'heart-outline'}
        size={20}
        color={showOnlyFavorites ? 'red' : '#444'}
        style={styles.icon}
      />
      <Text style={styles.text}>
        {showOnlyFavorites ? 'Mostrar todos' : 'Somente favoritos'}
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
    marginVertical: 12
  },
  icon: {
    marginRight: 6
  },
  text: {
    fontSize: 14,
    color: '#444',
    fontWeight: '500'
  }
})
