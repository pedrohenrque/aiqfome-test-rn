import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'
import React, { ReactNode } from 'react'
import { Platform } from 'react-native'
import { NotificationContext } from './notification.context'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true
  })
})

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [expoPushToken, setExpoPushToken] = React.useState<string>('')
  const [notification, setNotification] =
    React.useState<Notifications.Notification | null>(null)

  const notificationListener = React.useRef<Notifications.Subscription>()
  const responseListener = React.useRef<Notifications.Subscription>()

  async function registerForPushNotificationsAsync() {
    let token

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync()
      let finalStatus = existingStatus

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status
      }

      if (finalStatus !== 'granted') {
        console.log('🚀 ~ falha ao obter push token:', finalStatus)
        return
      }

      token = (await Notifications.getExpoPushTokenAsync()).data
      console.log('🚀 ~ token:', token)
    } else {
      console.log(
        '🚀 ~ necessário dispositivo físico para testar push notification'
      )
    }

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF0000'
      })
    }

    return token
  }

  async function sendLocalNotification(
    title: string,
    body: string,
    data?: object
  ) {
    console.log('🚀 ~ sendLocalNotification data:', data)
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
        data: data || {}
      },
      trigger: { seconds: 1 } as Notifications.NotificationTriggerInput
    })
  }

  React.useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      if (token) setExpoPushToken(token)
    })

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification)
      })

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log('🚀 ~ notification response:', response)
        //TODO add callback function
      })

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        )
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current)
      }
    }
  }, [])

  return (
    <NotificationContext.Provider
      value={{
        expoPushToken,
        notification,
        sendLocalNotification
      }}
    >
      {children}
    </NotificationContext.Provider>
  )
}
