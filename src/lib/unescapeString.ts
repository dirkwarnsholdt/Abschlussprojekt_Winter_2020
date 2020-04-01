import { nUnescape, rnUnescape, rUnescape, tUnescape } from './unescapes/index'

export const unescapeString = (str: string): JSX.Element => {
  let newString: any = str
  newString = tUnescape(newString)
  newString = rnUnescape(newString)
  newString = nUnescape(newString)
  newString = rUnescape(newString)
  return newString
}
