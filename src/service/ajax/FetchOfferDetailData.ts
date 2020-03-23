import { url } from '../../config/constants'

interface ResponseType<T = any> extends Response {
  json<P = T>(): Promise<P>
}

export const FetchNewsData: any = (segment: number): {} => {
  return fetch(url + '/offer_detail' + '/' + segment.toString())
    .then(async (response: ResponseType) => response.json())
}
