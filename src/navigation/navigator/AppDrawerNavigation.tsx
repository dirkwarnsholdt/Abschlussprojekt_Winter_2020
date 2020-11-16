// @ts-nocheck
import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Dimensions } from 'react-native'
import theme from '../../config/theme.style'
import TabBarIcon from '../../lib/TabBarIcon'
import { DrawerItem } from '../../components/index'

// Screens
import HomeScreen from '../../screens/home/main'


// Navigator
import NewsStackNavigation from './NewsStackNavigation'
import OfferStackNavigation from './OfferStackNavigation'
import TimeScreen from '../../screens/time/main'
import GalleryScreen from '../../screens/gallery/main'
import ContactPersonScreen from '../../screens/contactPerson/main'

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
      headerShown: false,
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
    screen: NewsStackNavigation,
    navigationOptions: {
      headerShown: false,
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
    screen: OfferStackNavigation,
    navigationOptions: {
      headerShown: false,
      drawerLabel: 'Angebote',
      drawerIcon: ({ focused }: boolean): JSX.Element => (
        <TabBarIcon
          class='MaterialIcons'
          focused={focused}
          name='local-offer'
        />
      )
    }
  },
  ContactPerson: {
    screen: ContactPersonScreen,
    navigationOptions: {
    drawerLabel: 'Ansprechpartner',
    drawerIcon: ({ focused }: boolean): JSX.Element => (
      <TabBarIcon
        class='MaterialIcons'
        focused={focused}
        name='people'
      />
    )
  }
},
  Time: {
    screen: TimeScreen,
    navigationOptions: {
    drawerLabel: 'Öffnungszeiten',
    drawerIcon: ({ focused }: boolean): JSX.Element => (
      <TabBarIcon
        class='MaterialIcons'
        focused={focused}
        name='access-time'
      />
    )
  }
},
  Gallery: {
    screen: GalleryScreen,
    navigationOptions: {
      drawerLabel: 'Galerie',
      drawerIcon: ({ focused }: boolean): JSX.Element => (
        <TabBarIcon
          class='MaterialIcons'
          focused={focused}
          name='photo'
        />
      )
    }
  }
},
DrawerConfig
)

export default createAppContainer(AppDrawerNavigation)
