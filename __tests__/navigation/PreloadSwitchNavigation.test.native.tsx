import React from 'react'
import { PreloadSwitchNavigation } from '../../src/navigation/index'
import { shallow } from 'enzyme'

describe('renders PreloadSwitchNavigation correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<PreloadSwitchNavigation />)
    expect(wrapper).toMatchSnapshot()
  })
})
