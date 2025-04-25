import * as Notifications from 'expo-notifications'

export interface NotificationContextData {
  expoPushToken: string
  notification: Notifications.Notification | null
  sendLocalNotification: (
    title: string,
    body: string,
    data?: object
  ) => Promise<void>
}
