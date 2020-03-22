import React from 'react'
import { Container } from '../../src/components/index'
import { mount } from 'enzyme'

describe('renders Container correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = mount(<Container> Text which gets rendered as Child </Container>)
    expect(wrapper).toMatchSnapshot()
  })
})


