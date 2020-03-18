import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

type Props = {
  children: string,
  type?: string
}

const customText = ({ children, type }: Props): JSX.Element => {
  if (type === 'title' || type === 'Title') {
    return (
      <Text {...styles.textTitle}>
        {children}
      </Text>
    )
  }
  if (type === 'caption' || type === 'Caption') {
    return (
      <Text {...styles.textCaption}>
        {children}
      </Text>
    )
  }
  return (
    <Text {...styles.textBody}>
      {children}
    </Text>
  )
}

export default customText
