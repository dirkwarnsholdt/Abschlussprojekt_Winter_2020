import React from 'react'
import { NewsStackNavigation } from '../../src/navigation/index.ts'
import { shallow } from 'enzyme'

describe('renders NewsStackNavigation correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<NewsStackNavigation />)
    expect(wrapper).toMatchSnapshot()
  })
})
