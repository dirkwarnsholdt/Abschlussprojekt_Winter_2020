import React from 'react'
import { Text } from 'react-native'

const rnUnescape = (str: string) => {
  let newString = str
  try {
    newString = str.split(`\\r\\n`).map((txt, key) => <Text key={key}>{ txt }{ '\r' }{ '\n' }</Text>)
  } catch (e) { /* when there is no \r\n */ }
  return newString
}

export default rnUnescape
