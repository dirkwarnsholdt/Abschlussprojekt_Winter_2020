import React from 'react'
import { DrawerIcon } from '../../src/components/index.ts'
import { shallow } from 'enzyme'

describe('renders DrawerIcon correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<DrawerIcon />)
    expect(wrapper).toMatchSnapshot() // This is a bit wonky, cuz shallow doesnt really mount the component -- Workaround for withNavigation() which breaks mounting without Mocks/Spys
  })
})
