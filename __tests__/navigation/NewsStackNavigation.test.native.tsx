import React from 'react'
import { NewsStackNavigation } from '../../src/navigation/index.ts'
import renderer from 'react-test-renderer';

describe('renders NewsStackNavigation correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = renderer.create(<NewsStackNavigation />)
    expect(wrapper).toMatchSnapshot()
  })
})
