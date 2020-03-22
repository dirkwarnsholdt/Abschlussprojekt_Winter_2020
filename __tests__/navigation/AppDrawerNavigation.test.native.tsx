import React from 'react'
import { AppDrawerNavigation } from '../../src/navigation/index'
import { shallow } from 'enzyme'

describe('renders AppDrawerNavigation correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<AppDrawerNavigation />)
    expect(wrapper).toMatchSnapshot()
  })
})