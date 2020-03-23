import React from 'react'
import OfferScreen from '../../src/screens/offer/main.tsx'
import { shallow } from 'enzyme'
import "isomorphic-fetch"

describe('renders OfferScreen correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<OfferScreen />)
    wrapper.setState({ isLoading: false })
    expect(wrapper).toMatchSnapshot()
  })
})
