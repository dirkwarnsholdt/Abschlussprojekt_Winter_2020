import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Header, HomeImage, Text } from '../../components/index'
import strings from '../../config/strings'
import styles from './styles'
import theme from '../../config/theme.style'

class HomeScreen extends Component {
  render(): JSX.Element {
    return (
      <Container>
        <Header />
        <View style={styles.container}>
          <HomeImage />
          <View style={styles.container}>
            <Text type='title' color={theme.COLOR_PRIMARY}>{strings.home.title}</Text>
            <Text>{strings.home.body}</Text>
          </View>
        </View>
      </Container>
    )
  }
}

export default HomeScreen
