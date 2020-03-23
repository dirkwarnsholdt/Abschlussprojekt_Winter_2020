import React from 'react'
import NewsScreen from '../../src/screens/news/main.tsx'
import { shallow } from 'enzyme'
import "isomorphic-fetch"

describe('renders NewsScreen correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<NewsScreen />)
    wrapper.setState({ isLoading: false })
    expect(wrapper).toMatchSnapshot()
  })
})
