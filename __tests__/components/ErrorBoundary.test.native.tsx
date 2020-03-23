import React from 'react'
import { Text, View } from 'react-native'
import renderer from 'react-test-renderer'
import { ErrorBoundary } from '../../src/components/index'

describe('ErrorBoundary', () => {
  let consoleErrorSpy
  let errorMock
  let workingComponent

  beforeAll(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {}) // to clear ErrorBoundary errors in cli
    errorMock = new Error('This is a test error!')
    workingComponent = () => null
  })

  afterAll(() => {
    consoleErrorSpy.mockRestore() // called after to reset the consoleError ---- reset props to default
  })

  it('should render children', () => {  // Default, everything is OK and children should get rendered
    const wrapper = renderer.create(
      <ErrorBoundary>
        <workingComponent />
      </ErrorBoundary>
    )
    expect(wrapper.getInstance().state.error).toBe(null)
    expect(wrapper.getInstance().state.hasError).toBe(false)
    expect(wrapper).toMatchSnapshot()
  })

  it('should catch errors set the state and render the default FallbackComponent', () => { // checking if getDerivedStateFromError catches err
    const wrapper = renderer.create(
      <ErrorBoundary>
        <View>{errorMock}</View>
      </ErrorBoundary>
    )
    expect(wrapper.getInstance().state.hasError).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })

  it('should catch errors set the state render the FallbackComponent and call onError()', () => {
    const FallbackComponent = () => <Text>Error Fallback!</Text> // This is ErrSubstituteScreen
    const onError = jest.fn() // just mocking the fucntion and test, if its getting called
    const wrapper = renderer.create(
      <ErrorBoundary FallbackComponent={FallbackComponent} onError={onError}>
        <View>{errorMock}</View>
      </ErrorBoundary>
    )
    expect(wrapper.getInstance().state.error).not.toBeNull()
    expect(wrapper.getInstance().state.hasError).toBe(true)
    expect(onError).toHaveBeenCalledWith(expect.any(Error), expect.any(String))
    expect(wrapper).toMatchSnapshot()
  })

  it('should reset state when calling resetError', () => {
    const wrapper = renderer.create(
      <ErrorBoundary>
        <workingComponent />
      </ErrorBoundary>
    )
    wrapper.getInstance().setState({ error: errorMock, hasError: true }) // setting state manually
    wrapper.getInstance().resetError()  // calling reset() to check functionality
    expect(wrapper.getInstance().state.error).toBeNull()
    expect(wrapper.getInstance().state.hasError).toBe(false)
  })
})
