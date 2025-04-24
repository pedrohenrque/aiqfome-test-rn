import * as Icons from '@expo/vector-icons'
import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

interface IconProps {
  name: string
  size?: number
  color?: string
  iconSet: keyof typeof Icons
  style?: StyleProp<ViewStyle>
}

export function ExpoIcon({
  name = 'home',
  size,
  color,
  iconSet = 'AntDesign',
  style
}: IconProps) {
  const IconSetComponent = (Icons as any)[iconSet]

  if (!IconSetComponent) {
    console.warn(`Ícone não encontrado no conjunto ${iconSet}: ${name}`)
    return null
  }

  return (
    <View style={style}>
      <IconSetComponent name={name} size={size} color={color} />
    </View>
  )
}
