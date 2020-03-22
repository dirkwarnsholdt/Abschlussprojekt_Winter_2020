import React from 'react'
import { Text } from '../../src/components/index'
import { mount } from 'enzyme'

describe('renders Text-Body correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = mount(<Text />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('renders Text-Caption correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = mount(<Text type='Caption'/>)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('renders Text-Title correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = mount(<Text type='Title'/>)
    expect(wrapper).toMatchSnapshot()
  })
})
