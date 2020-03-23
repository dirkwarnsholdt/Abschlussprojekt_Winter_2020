import React from 'react'
import { AppDrawerNavigation } from '../../src/navigation/index.ts'
import renderer from 'react-test-renderer';

describe('renders AppDrawerNavigation correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = renderer.create(<AppDrawerNavigation />)
    expect(wrapper).toMatchSnapshot()
  })
})
