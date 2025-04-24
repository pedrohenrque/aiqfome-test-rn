import { Tabs } from 'expo-router'
import React from 'react'
import { Platform } from 'react-native'

import { ExpoIcon } from '@/components/ExpoIcon'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute'
          },
          default: {}
        })
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <ExpoIcon name="home" size={24} color={color} iconSet="AntDesign" />
          )
        }}
      />
    </Tabs>
  )
}
