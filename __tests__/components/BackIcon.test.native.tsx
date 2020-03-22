import React from 'react'
import { BackIcon } from '../../src/components/index'
// import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

describe('renders BackIcon correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<BackIcon />)
  })
})
