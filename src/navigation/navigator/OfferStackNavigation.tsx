import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import OfferScreen from '../../screens/offer/main'
import OfferDetailScreen from '../../screens/offerDetail/main'
import DetailScreen from '../../screens/detail/main'


const OfferStackNavigation = createStackNavigator(
  {
    OfferScreen: {
      screen: OfferScreen,
      navigationOptions: {
        header: null
      }

    },
    OfferDetailsScreen: {
      screen: OfferDetailScreen
    },
    DetailScreen: {
      screen: DetailScreen
    }
  },
  {
    initialRouteName: 'OfferScreen'
  }
)

export default createAppContainer(OfferStackNavigation)
