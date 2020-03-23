import { url } from '../../config/constants'

interface ResponseType<T = any> extends Response {
  json<P = T>(): Promise<P>
}

export const FetchNewsData: any = (): {} => {
  return fetch(url + '/news')
    .then(async (response: ResponseType) => response.json())
}
