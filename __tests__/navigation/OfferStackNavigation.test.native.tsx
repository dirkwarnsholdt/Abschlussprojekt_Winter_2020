import React from 'react'
import { OfferStackNavigation } from '../../src/navigation/index.ts'
import renderer from 'react-test-renderer';

describe('renders OfferStackNavigation correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = renderer.create(<OfferStackNavigation />)
    expect(wrapper).toMatchSnapshot()
  })
})
