import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Header, Text } from '../../components/index'

class OfferScreen extends Component {
  render(): JSX.Element {
    return (
      <Container>
        <Header />
        <View style={{ flex: 1 }}>
          <Text type='title'>Angebooooote</Text>
        </View>
      </Container>
    )
  }
}

export default OfferScreen
