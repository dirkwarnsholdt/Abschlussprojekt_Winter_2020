import React from 'react'
import { Platform, TouchableNativeFeedback, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native'

const ANDROID_VERSION_LOLLIPOP = 21

type Props = React.ComponentProps<typeof TouchableWithoutFeedback> & {
  pressColor: string,
  borderless: boolean
};

export default class TouchableItem extends React.Component<Props> {
  static defaultProps: Props = {
    borderless: false,
    pressColor: 'rgba(0, 0, 0, .32)'
  };

  render(): JSX.Element {
    if (
      Platform.OS === 'android' &&
      Platform.Version >= ANDROID_VERSION_LOLLIPOP
    ) {
      const { style, ...rest } = this.props
      return (
        <TouchableNativeFeedback
          {...rest}
          style={null}
          background={TouchableNativeFeedback.Ripple(
            this.props.pressColor,
            this.props.borderless
          )}
        >
          <View style={style}>{React.Children.only(this.props.children)}</View>
        </TouchableNativeFeedback>
      )
    }

    return (
      <TouchableOpacity {...this.props}>{this.props.children}</TouchableOpacity>
    )
  }
}
