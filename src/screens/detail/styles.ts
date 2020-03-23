import { StyleSheet, TextStyle } from 'react-native'
import theme from '../../config/theme.style'

const styles: any = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 0,
    color: theme.COLOR_BACKGROUND
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  bodyText: {
    textAlign: 'center',
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontFamily: theme.FONT_FAMILY_TEXT,
    fontWeight: theme.FONT_WEIGHT_LIGHT,
    color: theme.COLOR_WHITE
  } as TextStyle,
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 235,
    width: 355,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 70,
    borderWidth: 1,
    borderColor: '#000000'
  }
})

export default styles
