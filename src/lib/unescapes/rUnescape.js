import React from 'react'
import { Text } from 'react-native'

const rUnescape = (str: string) => {
  let newString = str
  try {
    newString = str.split(`\\r`).map((txt, key) => <Text key={key}>{ txt }{ '\r' }</Text>)
  } catch (e) { /* when there is no \r */ }
  return newString
}

export default rUnescape
