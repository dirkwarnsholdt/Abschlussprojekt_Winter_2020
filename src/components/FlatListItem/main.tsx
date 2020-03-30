import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import theme from '../../config/theme.style'
import styles from './styles'

type Props = {
  onPressItem: (id: number, title: string, content: string)=> void,
  id: number,
  selected?: boolean,
  title?: string,
  content?: string
}

// Easier and nicer syntax in FlatList's from now on
class FlatListItem extends PureComponent<Props> {
  _onPress: any = (): void => {
    this.props.onPressItem(this.props.id, this.props.title, this.props.content)
  }

  // probaly take diff color than tint
  render(): JSX.Element {
    const txtColor = this.props.selected ? theme.COLOR_TINT : theme.COLOR_PRIMARY
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.container}>
          <Text style={[styles.textCaption, { color: txtColor }]}>{this.props.title}</Text>
          <Text numberOfLines={2} ellipsizeMode='tail' style={[styles.textBody, { color: txtColor }]}>{this.props.content}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default FlatListItem
