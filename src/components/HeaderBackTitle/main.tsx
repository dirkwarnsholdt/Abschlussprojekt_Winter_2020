import React, { Component } from 'react'
import { Header } from 'react-native-elements'
import BackIcon from '../BackIcon/main'
import styles from './styles'
import theme from '../../config/theme.style'

type Props = {
  headerTitle: string
}

class CustomHeader extends Component<Props> {
  render(): JSX.Element {
    const styleTitle: any = {
      color: theme.COLOR_IVORY,
      fontFamily: theme.FONT_FAMILY_TITLE,
      fontSize: theme.FONT_SIZE_MEDIUM,
      fontWeight: theme.FONT_WEIGHT_LIGHT
    }


    return (
      <Header
        style={{ flex: 1 }}
        barStyle='dark-content'
        leftComponent={<BackIcon />}
        centerComponent={{ text: this.props.headerTitle, style: styleTitle }}
        // rightComponent={<GearIcon />}
        containerStyle={styles.container}
      />
    )
  }
}

export default CustomHeader
