import React, { Component } from 'react'
import ErrSubstituteScreen from '../ErrSubstituteScreen/main'

class ErrorBoundary extends Component<Props, State> {
  // fires error Event and catches err
  static getDerivedStateFromError(error: Error) {
    return { error, hasError: true }
  }

  constructor() {
    super()

    this.state = {
      error: null,
      hasError: false
    }
  }

  // mb replace return { error, hasError: true }
  // but cant get 'this' or pass functions to lifeCycleMethod
  _handleCatchError(error: Error) {
    this.setState({
      error,
      hasError: true
    })
  }

  // mb switch cDidCatch to some async method for performance. But since its an edge case its okay
  componentDidCatch(error: Error, info: { componentStack: string }) {
    if (typeof this.props.onError === 'function') {
      try {
        this.props.onError.call(this, error, info.componentStack)
      } catch (swallowedErr) {
        // shouldnt happen but w/e
      }
    }
  }
  resetError = () => {
    this.setState({
      error: null,
      hasError: false
    })
  }

  render() {
    const { ErrSubstituteScreen } = this.props

    return this.state.hasError && this.state.error
      ? <ErrSubstituteScreen
        error={this.state.error}
        resetError={this.resetError}
      />
      : this.props.children
  }
}

export default ErrorBoundary
