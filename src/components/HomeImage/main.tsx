import React from 'react'
import { View, Image } from 'react-native'
import styles from './styles'

const HomeImage = (): JSX.Element => (
  <View style={styles.container}>
    <Image source={require('../../assets/img/tsbw_home.png')}
      style={styles.homeImage}
      resizeMode='contain'/>
  </View>
)

export default HomeImage
