import React from 'react'
import OfferScreen from '../../src/screens/offer/main.tsx'
import { shallow } from 'enzyme'

describe('renders OfferScreen correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<OfferScreen />)
    expect(wrapper).toMatchSnapshot()
  })
})
