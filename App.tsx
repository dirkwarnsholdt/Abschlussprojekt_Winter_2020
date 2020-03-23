import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { PreloadSwitchNavigation } from './src/navigation/index'
import { ErrorBoundary } from './src/components/index'

class App extends Component {
  componentDidMount(): void {
    StatusBar.setHidden(true)
  }

  render(): JSX.Element {
    return (
      <ErrorBoundary>
        <PreloadSwitchNavigation />
      </ErrorBoundary>
    )
  }
}

export default App
