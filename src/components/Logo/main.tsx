import React from 'react'
import { Image } from 'react-native'
import styles from './styles'

const Logo = (): JSX.Element => (
  <Image source={require('../../assets/ico/tsbwLogo.png')}
    style={styles.headerLogo}
    resizeMode='contain'/>
)

export default Logo
