import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import { NavigationDrawerProp } from 'react-navigation-drawer'
import { Feather } from '@expo/vector-icons'
import theme from '../../config/theme.style'

type Props = {
  navigation: NavigationDrawerProp<any, any>
}

class DrawerIcon extends Component<Props> {
  render(): JSX.Element {
    const { navigation } = this.props
    return (
      <TouchableOpacity
        onPress={ (): any => navigation.openDrawer() }>
        <Feather
          name='menu'
          size={30}
          color={theme.COLOR_WHITE}
        />
      </TouchableOpacity>
    )
  }
}

export default withNavigation(DrawerIcon)
