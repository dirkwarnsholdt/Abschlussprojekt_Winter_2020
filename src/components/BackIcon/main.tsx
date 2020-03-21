import React, { Component } from 'react'
import { TouchableOpacity, Platform } from 'react-native'
import { withNavigation, NavigationScreenProp } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import theme from '../../config/theme.style'

type Props = {
  navigation: NavigationScreenProp<any>
}

class BackIcon extends Component<Props> {
  render(): JSX.Element {
    const { navigation } = this.props
    return (
      <TouchableOpacity
        key={BackIcon.id}
        onPress={ (): JSX.Element => navigation.goBack() }>
        <Ionicons
          name={
            Platform.OS === 'ios'
              ? `ios-arrow-round-back`
              : 'md-arrow-back'
          }
          size={30}
          color={theme.COLOR_WHITE}
        />
      </TouchableOpacity>
    )
  }
}

export default withNavigation(BackIcon)
