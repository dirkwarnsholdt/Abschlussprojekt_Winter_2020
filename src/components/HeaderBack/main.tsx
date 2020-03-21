import React, { Component } from 'react'
import { Header } from 'react-native-elements'
import BackIcon from '../BackIcon/main'
import styles from './styles'
import Logo from '../Logo/main'

class CustomHeader extends Component {
  render(): JSX.Element {
    return (
      <Header
        style={{ flex: 1 }}
        barStyle='dark-content'
        leftComponent={<BackIcon />}
        centerComponent={<Logo />}
        containerStyle={styles.container}
      />
    )
  }
}

export default CustomHeader
