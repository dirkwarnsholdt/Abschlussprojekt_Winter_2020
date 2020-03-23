// import React from 'react'
// import { Text } from 'react-native'

const tUnescape = (str: string) => {
  // trying new approach;
  // just 'removing' the '\t'
  // instead of trying to indent somehow

  try {
    const regex = /\\t+/gm
    const subst = ` `
    const newString = str.replace(regex, subst)
    return newString
  } catch (e) {
    console.log(e)
    // when no '\t' is present
  }

  return str
}

export default tUnescape
