import { url } from '../../config/constants'

interface ResponseType<T = any> extends Response {
  json<P = T>(): Promise<P>
}

export const FetchOfferData: any = (): {} => {
  return fetch(url + '/offer')
    .then(async (response: ResponseType) => response.json())
}

