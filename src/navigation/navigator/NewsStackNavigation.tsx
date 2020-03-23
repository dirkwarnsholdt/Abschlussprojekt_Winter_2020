import { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import NewsScreen from '../../screens/news/main'
import DetailScreen from '../../screens/detail/main'

type Props = {
  NewsScreen: Component<any>,
  DetailScreen: Component<any>
}

const PeopleStackNavigation = createStackNavigator<Props>(
  {
    NewsScreen: {
      screen: NewsScreen,
      navigationOptions: {
        header: null
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

export default createAppContainer(PeopleStackNavigation)
