import React from 'react'
import TimeScreen from '../../src/screens/time/main.tsx'
import { shallow } from 'enzyme'
import "isomorphic-fetch"

describe('renders TimeScreen correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<TimeScreen />)
    wrapper.setState({ isLoading: false })
    expect(wrapper).toMatchSnapshot()
  })
})
