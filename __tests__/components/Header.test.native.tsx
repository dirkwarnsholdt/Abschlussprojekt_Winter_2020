import React from 'react'
import { Header } from '../../src/components/index'
import { shallow } from 'enzyme'

describe('renders Header correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot() // This is a bit wonky, cuz shallow doesnt really mount the component -- Workaround for withNavigation() which breaks mounting without Mocks/Spys
  })
})
