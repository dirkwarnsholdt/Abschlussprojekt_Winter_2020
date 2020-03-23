import React from 'react'
import { OfferStackNavigation } from '../../src/navigation/index.ts'
import { shallow } from 'enzyme'

describe('renders OfferStackNavigation correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = shallow(<OfferStackNavigation />)
    expect(wrapper).toMatchSnapshot()
  })
})
