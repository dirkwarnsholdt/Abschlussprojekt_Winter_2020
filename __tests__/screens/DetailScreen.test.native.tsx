import React from 'react'
import DetailScreen from '../../src/screens/detail/main.tsx'
import { shallow } from 'enzyme'

describe('renders DetailScreen correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<DetailScreen />)
    expect(wrapper).toMatchSnapshot()
  })
})
