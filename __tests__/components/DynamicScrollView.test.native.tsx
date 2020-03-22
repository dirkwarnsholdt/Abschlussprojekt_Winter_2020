import React from 'react'
import { DynamicScrollView } from '../../src/components/index.ts'
import { mount } from 'enzyme'

describe('renders DynamicScrollView-Body correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = mount(<DynamicScrollView />)
    expect(wrapper).toMatchSnapshot()
  })
})

