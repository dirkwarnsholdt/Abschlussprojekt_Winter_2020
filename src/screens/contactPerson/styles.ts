import { StyleSheet } from 'react-native'
import Layout from '../../lib/Layout'
import theme from '../../config/theme.style'

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'stretch',
    textAlign: 'center'
  },
  itemSeparator: {
    width: Layout.screen.width,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.COLOR_LIGHTGRAY
  }
})

export default styles
