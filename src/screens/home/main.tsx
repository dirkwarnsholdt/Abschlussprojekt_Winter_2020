import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Header, HomeImage, Text } from '../../components/index'

class HomeScreen extends Component {
  render(): JSX.Element {
    return (
      <Container>
        <Header />
        <HomeImage />
        <View style={{ flex: 1 }}>
          <Text type='title'>Title - Impact Font</Text>
          <Text type='Caption'>Light Lato Caption text</Text>
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
      </Container>
    )
  }
}

export default HomeScreen
