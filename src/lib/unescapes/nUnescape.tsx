import React from 'react'
import { Text } from 'react-native'

const nUnescape = (str: string): JSX.Element => {
  let newString
  try {
    newString = str.split(`\\n`).map((txt: string, key: number) => <Text key={key}>{ txt }{ '\n' }</Text>)
  } catch (e) { /* when there is no \n */ }
  return newString
}

export default nUnescape
