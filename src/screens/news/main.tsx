import React, { PureComponent } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { Container, Header, FlatList } from '../../components/index'
import theme from '../../config/theme.style'
import styles from './styles'

type Props = {
  navigation: NavigationScreenProp<any, any>
}

type State = {
  isLoading: boolean,
  isRefreshing: boolean,
  jsonData: {}[]
}

class NewsScreen extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isLoading: true,
      jsonData: [],
      isRefreshing: false
    }
  }

  // having an unique id instead of an index or random number is preferable
  // for performance (prevents rerendering of whole screen once something changes)
  _keyExtractor: any = (item: {}) => item.id.toString()

  // redirects to Detail
  _onPressItem: any = (id: number, title: string) => {
    this.props.navigation.navigate('DetailScreen', {
      itemID: id,
      itemTitle: title,
      detailData: this.state.jsonData,
      styleParam: 'news',
      type: 'news'
    })
  }

  // creates a clickable FlatList Element
  _renderItem = ({ item }) => (
    <FlatListItem
      id={item.id}
      title={item.title}
      content={item.content}
      onPressItem={this._onPressItem}
    />
  )

  render(): JSX.Element {
    if (this.state.isLoading) {
      return (
        <Container>
          <ActivityIndicator size='large' color={theme.COLOR_IVORY}/>
        </Container>
      )
    }

    return (
      <Container>
        <Header />
        <View style={styles.container}>
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            data={this.state.jsonData}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            ItemSeparatorComponent={this._renderSeparator}
            showVerticalScrollIndicator={false}
            onRefresh={this._handleListRefesh}
            refreshing={this.state.isRefreshing}
          />
        </View>
      </Container>
    )
  }
}
export default NewsScreen
