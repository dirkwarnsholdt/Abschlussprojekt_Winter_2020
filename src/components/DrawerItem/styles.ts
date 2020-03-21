import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    color: '#fff',
    fontFamily: 'impact',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 14,
    paddingBottom: 6,
    marginBottom: 2,
    borderBottomColor: 'grey',
    borderBottomWidth: 1.5
  },
  container: {
    paddingVertical: 4,
    flex: 1
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center'
  },
  inactiveIcon: {
    /*
     * Icons have 0.54 opacity according to guidelines
     * 100/87 * 54 ~= 62
     */
    opacity: 0.62
  },
  label: {
    margin: 16,
    fontWeight: 'bold'
  }
})

export default styles
