import React from 'react'
import { NotificationContextData } from './notification.type'

export const NotificationContext = React.createContext<NotificationContextData>(
  {} as NotificationContextData
)

export function useNotification(): NotificationContextData {
  return React.useContext(NotificationContext)
}
