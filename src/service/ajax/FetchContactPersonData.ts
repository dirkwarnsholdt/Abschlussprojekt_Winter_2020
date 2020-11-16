import { url } from '../../config/constants'

interface ResponseType<T = any> extends Response {
  json<P = T>(): Promise<P>
}

export const FetchContactPersonData: any = (): {} => {
  return fetch(url + '/person')
    .then(async (response: ResponseType) => response.json())
}
