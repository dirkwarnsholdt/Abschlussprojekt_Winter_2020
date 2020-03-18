import { StyleSheet } from 'react-native'
import theme from '../../config/theme.style'

export default StyleSheet.create({
  textTitle: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: theme.FONT_FAMILY_TITLE,
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    fontStyle: 'normal',
    color: theme.COLOR_IVORY
  },
  textCaption: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: theme.FONT_FAMILY_CAPTION,
    fontSize: theme.FONT_SIZE_SMALL,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    fontStyle: 'normal',
    color: theme.COLOR_IVORY
  },
  textBody: {
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: theme.FONT_FAMILY_TEXT,
    fontSize: theme.FONT_SIZE_TINY,
    fontWeight: theme.FONT_WEIGHT_LIGHT,
    fontStyle: 'normal',
    color: theme.COLOR_IVORY
  }
})
