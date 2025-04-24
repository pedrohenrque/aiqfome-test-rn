import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  imageContainer: {
    position: 'relative'
  },
  image: {
    width: '100%',
    height: 160
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 6
  },
  details: {
    padding: 12
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rating: {
    fontSize: 13,
    color: '#333'
  },
  priceTag: {
    marginLeft: 8,
    backgroundColor: '#000',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4
  },
  priceText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13
  }
})
