import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Dimensions } from 'react-native'
import theme from '../../config/theme.style'
import TabBarIcon from '../../lib/TabBarIcon'
import { DrawerItem } from '../../components/index'

// Screens
import HomeScreen from '../../screens/home/main'
import NewsScreen from '../../screens/news/main'
import OfferScreen from '../../screens/offer/main'

const WIDTH = Dimensions.get('window').width
const DrawerConfig = {
  drawerType: 'front',
  drawerWidth: WIDTH * 0.60,
  drawerBackgroundColor: 'rgb(55, 58, 60)',
  overlayColor: 'rgb(35, 38, 40)',
  contentComponent: (props: any): null => <DrawerItem {...props}/>,

  contentOptions: {
    activeBackgroundColor: 'rgb(238, 167, 2)',
    inactiveBackgroundColor: 'rgb(55, 58, 60)',
    activeTintColor: 'rgb(55, 58, 60)',
    inactiveTintColor: theme.COLOR_IVORY,
    labelStyle: {
      fontSize: theme.FONT_SIZE_TINY,
      fontFamily: theme.FONT_FAMILY_CAPTION,
      fontWeight: theme.FONT_WEIGHT_MEDIUM,
      fontStyle: 'italic',
      color: theme.COLOR_IVORY,
      margin: 5,
      padding: 10,
      textShadowOffset: {
        width: 1.75,
        height: 1.75
      },
      textShadowColor: 'rgba(255,255,255,0.2)'
    }
  }
}

const AppDrawerNavigation = createDrawerNavigator<Props>({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
      drawerLabel: 'Home',
      drawerIcon: ({ focused }: boolean): JSX.Element => (
        <TabBarIcon
          class='MaterialIcons'
          focused={focused}
          name='home'
        />
      )
    }
  },
  News: {
    screen: NewsScreen,
    navigationOptions: {
      header: null,
      drawerLabel: 'News',
      drawerIcon: ({ focused }: boolean): JSX.Element => (
        <TabBarIcon
          class='MaterialCommunityIcons'
          focused={focused}
          name='newspaper'
        />
      )
    }
  },
  Offer: {
    screen: OfferScreen,
    navigationOptions: {
      header: null,
      drawerLabel: 'Angebote',
      drawerIcon: ({ focused }: boolean): JSX.Element => (
        <TabBarIcon
          class='MaterialIcons'
          focused={focused}
          name='local-offer'
        />
      )
    }
  }
},
DrawerConfig
)

export default createAppContainer(AppDrawerNavigation)
