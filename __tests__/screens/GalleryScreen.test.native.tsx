import React from 'react'
import GalleryScreen from '../../src/screens/gallery/main.tsx'
import { shallow } from 'enzyme'
import "isomorphic-fetch"

describe('renders GalleryScreen correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<GalleryScreen />)
    wrapper.setState({ isLoading: false })
    expect(wrapper).toMatchSnapshot()
  })
})
