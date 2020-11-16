import { forModalPresentationIOS } from "react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/CardStyleInterpolators";
import { url } from '../../config/constants'

export const FetchTimeData = () => {
    return fetch(url + '/time')
    .then(Response => Response.json())
}