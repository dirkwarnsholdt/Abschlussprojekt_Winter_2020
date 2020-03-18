import { Platform } from 'react-native'
const isIOS = Platform.OS === 'ios'

export default {
  // Basic Font Options
  COLOR_TEXT: '#fffff0',
  FONT_FAMILY_TITLE: 'impact',
  FONT_FAMILY_CAPTION: 'latoLightitalic',
  FONT_FAMILY_TEXT_ANDROID: 'Roboto',
  FONT_FAMILY_TEXT_IOS: 'robotoCondensed',
  FONT_FAMILY_TEXT: isIOS ? 'robotoCondensed' : 'Roboto',

  // Font Sizes
  FONT_SIZE_TINY: 15,
  FONT_SIZE_SMALL: 20,
  FONT_SIZE_MEDIUM: 26,
  FONT_SIZE_LARGE: 35,
  FONT_SIZE_LARGER: 42,

  // Font Weights
  FONT_WEIGHT_THIN: '100',
  FONT_WEIGHT_LIGHT: '300',
  FONT_WEIGHT_MEDIUM: '600',
  FONT_WEIGHT_HEAVY: '800',

  // Colors
  COLOR_WHITE: 'rgb(255, 255, 255)',
  COLOR_IVORY: 'rgb(255, 255, 240)',
  COLOR_HONEYDEW: 'rgb(240, 255, 240)',
  COLOR_LIGHTGRAY: 'rgb(159,161,163)',
  COLOR_BACKGROUND: 'rgb(55, 58, 60)',
  COLOR_HEADER: 'rgb(35, 38, 40)',
  COLOR_PRIMARY: 'rgb(238, 167, 2)',
  COLOR_TINT: '#2f95dc'
}
