import React from 'react'
import { Text } from 'react-native'

const nUnescape = (str: string) => {
  let newString = str
  try {
    newString = str.split(`\\n`).map((txt, key) => <Text key={key}>{ txt }{ '\n' }</Text>)
  } catch (e) { /* when there is no \n */ }
  return newString
}

export default nUnescape
