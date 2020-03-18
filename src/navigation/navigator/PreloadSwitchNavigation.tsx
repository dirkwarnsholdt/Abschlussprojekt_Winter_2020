import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import App from '../../../App.tsx'
import LoadingScreen from '../../screens/_LoadingScreen/main'

export default createAppContainer(createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: App
  },
  {
    initialRouteName: 'Loading',
    backBehavior: 'none'
  }
))
