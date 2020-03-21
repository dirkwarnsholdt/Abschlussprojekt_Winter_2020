import React from 'react'
import { MaterialIcons, MaterialCommunityIcons, Feather } from '@expo/vector-icons'
import theme from '../config/theme.style'

export default class TabBarIcon extends React.Component {
  render(): JSX.Element {
    if (this.props.class === 'MaterialIcons') {
      return (
        <MaterialIcons
          name={this.props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={this.props.focused ? theme.COLOR_TINT : '#ccc'}
        />
      )
    } else if (this.props.class === 'MaterialCommunityIcons') {
      return (
        <MaterialCommunityIcons
          name={this.props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={this.props.focused ? theme.COLOR_TINT : '#ccc'}
        />
      )
    } else if (this.props.class === 'Feather') {
      return (
        <Feather
          name={this.props.name}
          size={26}
          style={{ marginBottom: -3 }}
          color={this.props.focused ? theme.COLOR_TINT : '#ccc'}
        />
      )
    }
    return null
  }
}
