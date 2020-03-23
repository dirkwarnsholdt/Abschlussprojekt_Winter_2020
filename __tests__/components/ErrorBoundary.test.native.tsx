import React from 'react'
import { Text, View } from 'react-native'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { ErrorBoundary } from '../src/components/index'

describe('ErrorBoundary', () => {
  let ComponentWithoutError
  let ComponentWithError
  let consoleErrorSpy
  let errorMock

  beforeAll(() => {
    ComponentWithoutError = () => null
    ComponentWithError = () => { throw new Error()}
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
    errorMock = new Error('This is a test error!')
  })

  afterAll(() => {
    consoleErrorSpy.mockRestore()
  })

  it('should render children when there are no errors', () => {
    const wrapper = mount(
      <ErrorBoundary>
        <ComponentWithoutError />
      </ErrorBoundary>
    )
    expect(wrapper.instance().state.hasError).toBe(false)
    expect(wrapper).toMatchSnapshot()
  })

  it('should catch errors set the state and render the default FallbackComponent', () => {
    const wrapper = mount(
      <ErrorBoundary>
        <ComponentWithError />
      </ErrorBoundary>
    )
    expect(wrapper.instance().state.hasError).toBe(false)
    expect(wrapper).toMatchSnapshot()
  })

})
