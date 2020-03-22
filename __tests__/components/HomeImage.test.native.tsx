import React from 'react'
import { HomeImage } from '../../src/components/index'
import { mount } from 'enzyme'

describe('renders HomeImage correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = mount(<HomeImage />)
    expect(wrapper).toMatchSnapshot()
  })
})
