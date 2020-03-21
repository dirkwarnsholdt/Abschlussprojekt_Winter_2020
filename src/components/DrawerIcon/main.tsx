import React, { Component } from 'react'
import theme from '../../config/theme.style'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { withNavigation, NavigationScreenProp } from 'react-navigation'

type Props = {
  navigation: NavigationScreenProp<any>
}

class DrawerIcon extends Component<Props> {
  render(): JSX.Element {
    const { navigation } = this.props
    return (
      <TouchableOpacity
        key={DrawerIcon.id}
        onPress={ (): null => navigation.openDrawer() }>
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
