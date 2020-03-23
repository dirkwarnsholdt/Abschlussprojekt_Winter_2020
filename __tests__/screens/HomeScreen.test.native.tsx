import React from 'react'
import HomeScreen from '../../src/screens/home/main.tsx'
import { shallow } from 'enzyme'

describe('renders HomeScreen correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<HomeScreen />)
    expect(wrapper).toMatchSnapshot()
  })
})
