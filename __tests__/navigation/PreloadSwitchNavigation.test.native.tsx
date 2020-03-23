import React from 'react'
import { PreloadSwitchNavigation } from '../../src/navigation/index.ts'
import renderer from 'react-test-renderer';

describe('renders PreloadSwitchNavigation correctly', () => {
  it('should match Snapshot', () => {
    const wrapper = renderer.create(<PreloadSwitchNavigation />)
    expect(wrapper).toMatchSnapshot()
  })
})
