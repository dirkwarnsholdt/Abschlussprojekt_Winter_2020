import React, { PureComponent } from 'react'
import { ActivityIndicator, View, FlatList } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { Container, Header, FlatListItem } from '../../components/index'
import { FetchContactPersonData } from '../../service/index'
import theme from '../../config/theme.style'
import styles from './styles'

type json = {
  id: number,
  title: string,
  content: string,
  edited_by: number,
  created_at: Date,
  updated_at: Date
}

type Props = {
  navigation: NavigationScreenProp<any, any>
}

type State = {
  isLoading: boolean,
  isRefreshing: boolean,
  jsonData: json[]
}

class ContactPersonScreen extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isLoading: true,
      jsonData: [],
      isRefreshing: false
    }
  }

  // fetches jsonObject from API => data.val
  _fetchData: any = (): void => {
    FetchContactPersonData()
      .then((data: json[]) => {
        this.setState({
          isLoading: false,
          isRefreshing: false,
          jsonData: data
        })
      })
      .catch((error: Error) => {
        console.log(error)
      })
  }

  // fetching json from API in cDM
  componentDidMount(): void {
    this._fetchData()
  }

  // having an unique id instead of an index or random number is preferable
  // for performance (prevents rerendering of whole screen once something changes)
  _keyExtractor: any = (item: any) => item.id.toString()

  // redirects to Detail
  _onPressItem: any = (id: number, title: string) => {
    this.props.navigation.navigate('DetailScreen', {
      itemID: id,
      itemTitle: title,
      detailData: this.state.jsonData,
      styleParam: 'news',
      type: 'person'
    })
  }

  // creates a clickable FlatList Element
  _renderItem: any = ({ item }: any) => (
    <FlatListItem
      id={item.id}
      title={item.title}
      content={item.content}
      onPressItem={this._onPressItem}
    />
  )

  // a view with border, essentially just a line as Separator
  _renderSeparator: any = () => <View style={styles.itemSeparator} />

  // handles the PullDown @ y===0 => refresh json
  // setState callback is called immediately after state change
  _handleListRefesh: any = (): void => {
    this.setState({
      isRefreshing: true },
    this._fetchData()
    )
  }

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
            onRefresh={this._handleListRefesh}
            refreshing={this.state.isRefreshing}
          />
        </View>
      </Container>
    )
  }
}
export default ContactPersonScreen
