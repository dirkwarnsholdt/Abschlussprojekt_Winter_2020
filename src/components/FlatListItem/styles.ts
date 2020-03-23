import { StyleSheet, TextStyle } from 'react-native'
import theme from '../../config/theme.style'

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: 25,
    borderRadius: 4
  },
  textCaption: {
    fontFamily: theme.FONT_FAMILY_CAPTION,
    fontSize: theme.FONT_SIZE_MEDIUM,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
    fontStyle: 'normal',
    color: theme.COLOR_IVORY,
    marginTop: 22
  } as TextStyle,
  textBody: {
    fontFamily: theme.FONT_FAMILY_TEXT,
    fontSize: theme.FONT_SIZE_TINY,
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: theme.FONT_WEIGHT_LIGHT,
    fontStyle: 'normal',
    color: theme.COLOR_IVORY,
    marginTop: -5,
    display: 'flex'
  } as TextStyle
})

export default styles
