import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { Container, Header, Text } from '../../components/index'

class OfferScreen extends Component {
  render(): JSX.Element {
    return (
      <Container>
        <Header />
        <View style={{ flex: 1 }}>
          <Text type='title'>Angebooooote</Text>
          <Button
            title='Throw Error!'
            onPress={(): any => {
              throw new Error('Button killed it!')
            }}
          />
        </View>
      </Container>
    )
  }
}

export default OfferScreen
