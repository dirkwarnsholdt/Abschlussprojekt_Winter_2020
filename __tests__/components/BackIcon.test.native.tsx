import React from 'react'
import { BackIcon } from '../../src/components/index.ts'
import { shallow } from 'enzyme'

describe('renders BackIcon correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<BackIcon />)
    expect(wrapper).toMatchSnapshot() // This is a bit wonky, cuz shallow doesnt really mount the component -- Workaround for withNavigation() which breaks mounting without Mocks/Spys
  })
})
