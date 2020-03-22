import React from 'react'
import { HeaderBackTitle } from '../../src/components/index'
import { shallow } from 'enzyme'

describe('renders HeaderBackTitle correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<HeaderBackTitle headerTitle='TestTitle'/>)
    expect(wrapper).toMatchSnapshot() // This is a bit wonky, cuz shallow doesnt really mount the component -- Workaround for withNavigation() which breaks mounting without Mocks/Spys
  })
})
