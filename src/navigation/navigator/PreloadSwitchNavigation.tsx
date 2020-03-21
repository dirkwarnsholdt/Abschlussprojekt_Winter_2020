import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AppDrawerNavigation from './AppDrawerNavigation '
import LoadingScreen from '../../screens/_LoadingScreen/main'

export default createAppContainer(createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppDrawerNavigation
  },
  {
    initialRouteName: 'Loading',
    backBehavior: 'none'
  }
))
