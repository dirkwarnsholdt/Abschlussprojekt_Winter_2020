import React from 'react'
import NewsScreen from '../../src/screens/news/main.tsx'
import { shallow } from 'enzyme'

describe('renders MaterialIcons/adb correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<NewsScreen />)
    expect(wrapper).toMatchSnapshot()
  })
})
