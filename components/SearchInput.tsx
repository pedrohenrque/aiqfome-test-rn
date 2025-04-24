import React, { useRef } from 'react'
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View
} from 'react-native'
import { ExpoIcon } from './ExpoIcon'

interface InputProps extends TextInputProps {
  onRightIconPress?: () => void
}

export function SearchInput({ onRightIconPress, ...props }: InputProps) {
  const inputRef = useRef<TextInput>(null)

  return (
    <View style={styles.container}>
      <ExpoIcon
        iconSet="AntDesign"
        name="search1"
        size={20}
        color="#999"
        style={styles.iconLeft}
      />

      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholderTextColor="#999"
        placeholder="Buscar"
        {...props}
      />

      <TouchableOpacity onPress={onRightIconPress} style={styles.iconRight}>
        <ExpoIcon iconSet="Ionicons" name="filter" size={20} color="#999" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    height: 40
  },
  iconLeft: {
    marginRight: 8
  },
  iconRight: {
    marginLeft: 8
  },
  input: {
    flex: 1,
    fontSize: 12,
    color: '#333'
  }
})
