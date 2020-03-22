import React from 'react'
import TabBarIcon from '../../src/lib/TabBarIcon.tsx'
import { mount } from 'enzyme'

describe('renders MaterialIcons/adb correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = mount(
      <TabBarIcon
        class='MaterialIcons'
        focused={false}
        name='adb'
      />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('renders MaterialCommunityIcons/exponent correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = mount(
      <TabBarIcon
        class='MaterialCommunityIcons'
        focused={false}
        name='exponent'
      />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('renders Feather/aperture correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = mount(
      <TabBarIcon
        class='Feather'
        focused={false}
        name='aperture'
      />)
    expect(wrapper).toMatchSnapshot()
  })
})
