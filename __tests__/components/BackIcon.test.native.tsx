import React from 'react'
import { BackIcon } from '../../src/components/index'
// import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

describe('renders BackIcon correctly', () => {
  it('should simulate click', () => {
    const wrapper = mount(<BackIcon />)
    expect(wrapper).toMatchSnapshot()
  })
})
