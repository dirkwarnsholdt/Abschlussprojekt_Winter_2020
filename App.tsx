import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { PreloadSwitchNavigation } from './src/navigation/index'

class App extends Component {
  componentDidMount(): void {
    StatusBar.setHidden(true)
  }

  render(): JSX.Element {
    return (
      <PreloadSwitchNavigation />
    )
  }
}

export default App
