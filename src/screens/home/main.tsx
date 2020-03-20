import React, { Component } from 'react'
import Container from '../../components/Container/main'
import Text from '../../components/Text/main'
// import styles from './styles'

class HomeScreen extends Component {
  render(): JSX.Element {
    return (
      <Container>
        <Text type='title'>Title - Impact Font</Text>
        <Text type='Caption'>Light Lato Caption text</Text>
        <Text>Open up App.tsx to start working on your app!</Text>
      </Container>
    )
  }
}

export default HomeScreen
