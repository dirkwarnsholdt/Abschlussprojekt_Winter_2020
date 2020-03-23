import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import NewsScreen from '../../screens/news/main'
import DetailScreen from '../../screens/detail/main'


const NewsStackNavigation = createStackNavigator(
  {
    NewsScreen: {
      screen: NewsScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    DetailScreen: {
      screen: DetailScreen
    }
  },
  {
    initialRouteName: 'NewsScreen'
  }
)

export default createAppContainer(NewsStackNavigation)
