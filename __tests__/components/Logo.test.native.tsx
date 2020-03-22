import React from 'react'
import { Logo } from '../../src/components/index'
import { mount } from 'enzyme'

describe('renders Logo correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = mount(<Logo />)
    expect(wrapper).toMatchSnapshot()
  })
})
