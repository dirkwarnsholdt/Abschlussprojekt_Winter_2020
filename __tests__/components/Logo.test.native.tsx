import React from 'react'
import { Logo } from '../../src/components/index'
import renderer from 'react-test-renderer'

test('renders Logo correctly', () => {
  const tree = renderer.create(<Logo />).toJSON()
  expect(tree).toMatchSnapshot()
})
