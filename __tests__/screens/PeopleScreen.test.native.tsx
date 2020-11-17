import React from 'react'
import ContactPersonScreen from '../../src/screens/contactPerson/main.tsx'
import { shallow } from 'enzyme'
import "isomorphic-fetch"

describe('renders ContactPersonScreen correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<ContactPersonScreen />)
    wrapper.setState({ isLoading: false })
    expect(wrapper).toMatchSnapshot()
  })
})
