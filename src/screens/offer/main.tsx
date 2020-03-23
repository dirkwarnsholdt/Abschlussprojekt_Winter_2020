import React, { Component } from 'react'
import { Button, View } from 'react-native'
import { Container, Header } from '../../components/index'

class OfferScreen extends Component {
  constructor() {
    super()

    this.state = {
      isBroken: false
    }
  }

  _throwError: any = () => this.setState({ isBroken: true });

  render(): JSX.Element {
    if (this.state.isBroken) {
      throw new Error('Button killed it!')
    }

    return (
      <Container>
        <Header />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button onPress={this._throwError} title={'crash'} />
        </View>
      </Container>
    )
  }
}

export default OfferScreen
