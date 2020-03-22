import React from 'react'
import HomeScreen from '../../src/screens/home/main'
import { shallow } from 'enzyme'

describe('renders MaterialIcons/adb correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<HomeScreen />)
    expect(wrapper).toMatchSnapshot()
  })
})
