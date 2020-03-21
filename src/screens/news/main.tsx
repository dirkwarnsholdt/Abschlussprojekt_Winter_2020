import React, { Component } from 'react'
import { View } from 'react-native'
import { Container, Header, Text } from '../../components/index'

class NewsScreen extends Component {
  render(): JSX.Element {
    return (
      <Container>
        <Header />
        <View style={{ flex: 1 }}>
          <Text type='title'>News</Text>
        </View>
      </Container>
    )
  }
}

export default NewsScreen
