import React from 'react'
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native'

interface SafeAreaContainerProps {
  children: React.ReactNode
  style?: object
}

export function SafeAreaContainer({ children, style }: SafeAreaContainerProps) {
  return (
    <View style={[styles.general, style]}>
      {Platform.OS === 'ios' ? (
        <SafeAreaView style={styles.general}>{children}</SafeAreaView>
      ) : (
        <View
          style={[styles.general, { paddingTop: StatusBar.currentHeight || 0 }]}
        >
          {children}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  general: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
