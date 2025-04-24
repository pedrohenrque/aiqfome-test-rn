import { SearchInput } from '@/components/SearchInput'
import { View } from 'react-native'
import { styles } from './home.styles'

export function Home() {
  return (
    <View style={styles.container}>
      <SearchInput />
    </View>
  )
}
