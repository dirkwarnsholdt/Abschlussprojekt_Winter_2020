import React from 'react'
import { HeaderBack } from '../../src/components/index.ts'
import { shallow } from 'enzyme'

describe('renders HeaderBack correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<HeaderBack />)
    expect(wrapper).toMatchSnapshot() // This is a bit wonky, cuz shallow doesnt really mount the component -- Workaround for withNavigation() which breaks mounting without Mocks/Spys
  })
})
