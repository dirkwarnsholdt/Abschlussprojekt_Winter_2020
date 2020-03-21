import React, { Component } from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import TouchableItem from './TouchableItem'
import styles from './styles'
import strings from '../../config/strings'
import theme from '../../config/theme.style'

class DrawerItem extends Component {
  constructor() {
    super()

    this.state = {
      isFinishedSaving: false,
      activeTintColor: null,
      activeBackgroundColor: theme.COLOR_PRIMARY,
      inactiveTintColor: theme.COLOR_BACKGROUND,
      inactiveBackgroundColor: theme.COLOR_BACKGROUND
    }
  }

  render(): JSX.Element {
    return (
      <>
        <View style={{ backgroundColor: theme.COLOR_HEADER }}><Text style={styles.header}>{strings.drawer.header}</Text></View>
        <View style={[styles.container, this.props.itemsContainerStyle, { backgroundColor: theme.COLOR_BACKGROUND }]}>
          {this.props.items.map((route: any, index: number) => {
            const focused = this.props.activeItemKey === route.key
            const color = focused ? this.props.activeTintColor : this.props.inactiveTintColor
            const backgroundColor = focused
              ? this.state.activeBackgroundColor
              : this.state.inactiveBackgroundColor
            const scene = { route, index, focused, tintColor: color }
            const icon = this.props.renderIcon(scene)
            const label = this.props.getLabel(scene)
            const accessibilityLabel = typeof label === 'string' ? label : undefined
            const extraLabelStyle = focused ? this.props.activeLabelStyle : this.props.inactiveLabelStyle
            return (
              <TouchableItem
                key={route.key}
                accessible
                accessibilityLabel={accessibilityLabel}
                onPress={(): null => {
                  this.props.onItemPress({ route, focused })
                }}
                delayPressIn={0}
              >
                <SafeAreaView
                  style={[{ backgroundColor }, styles.item, this.props.itemStyle]}
                  forceInset={{
                    [this.props.drawerPosition]: 'always',
                    [this.props.drawerPosition === 'left' ? 'right' : 'left']: 'never',
                    vertical: 'never'
                  }}
                >
                  {icon ? (
                    <View
                      style={[
                        styles.icon,
                        focused ? null : styles.inactiveIcon,
                        this.props.iconContainerStyle
                      ]}
                    >
                      {icon}
                    </View>
                  ) : null}
                  {typeof label === 'string' ? (
                    <Text
                      style={[styles.label, { color }, this.props.labelStyle, extraLabelStyle]}
                    >
                      {label}
                    </Text>
                  ) : (
                    label
                  )}
                </SafeAreaView>
              </TouchableItem>
            )
          })}
        </View>
      </>
    )
  }
}

export default DrawerItem
