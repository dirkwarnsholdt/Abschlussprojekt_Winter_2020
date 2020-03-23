import React, { PureComponent } from 'react'
import { ActivityIndicator, View, FlatList } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { Container, HeaderBackTitle, FlatListItem } from '../../components/index'
import theme from '../../config/theme.style'
import styles from './styles'
import dummyData from '../../lib/data'

type Props = {
  navigation: NavigationScreenProp<any>
}

type State = {
  isLoading: boolean,
  selected: Map<string, boolean>,
  isRefreshing: boolean,
  jsonData: {}[],
  detailData: {}[],
  itemID: number | null
}

class OfferDetailScreen extends PureComponent<Props, State> {
  static navigationOptions: any = {
    header: null
  }
  constructor(props: Props) {
    super(props)
    this.state = {
      isLoading: true,
      selected: (new Map()),
      isRefreshing: false,
      jsonData: [],
      detailData: [],
      itemID: null
    }
  }

    // probaly decrepated since itemID usage is fixed now and I dont need the index anymore
    _getCorrectIndex: any = (detailData: any, itemID: number): number | null => {
      for (let i = 0; i < detailData.length - 1; i++) {
        if (detailData[i].id === itemID) {
          return i
        }
      }
      return null
    }

  // fetches jsonObject from API => data.val
  _fetchData: any = (): void => {
    this.setState({
      isLoading: false,
      isRefreshing: false,
      jsonData: dummyData
    })
  }

  _saveItemID: any = (itemID: number): void => {
    if (typeof itemID === 'number') {
      this.setState({ itemID })
    }
  }

  _fixItemID: any = async (itemID: number): Promise<void> => {
    await this._saveItemID(itemID)
    await this._fetchData()
  }

  // fetching json from API in cDM
  componentDidMount(): void {
    const { navigation } = this.props
    const itemID = navigation.getParam('itemID', null)
    this._fixItemID(itemID)
  }

  // having an unique id instead of an index or random number is preferable
  // for performance (prevents rerendering of whole screen once something changes)
  _keyExtractor: any = (item: any): string => item.id.toString()

  _onPressSelect: any = (id: string): any => {
    this.setState((state: {selected: Map<any, any>}) => {
      // copy map instead of chaning state
      const selected = new Map(state.selected)
      selected.set(id, !selected.get(id)) // toggle selection
      return { selected }
    })
  }

    _onPressItem: any = (id: number, title: string): void => {
      this.props.navigation.navigate('DetailScreen', {
        itemID: id,
        itemTitle: title,
        detailData: this.state.jsonData,
        type: 'offerDetail'
      })
    }

  // creates a clickable FlatList Element
  _renderItem: any = ({ item }: any): JSX.Element => (
    <FlatListItem
      id={item.id}
      title={item.title}
      content={item.content}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
    />
  )

  // a view with border, essentially just a line as Separator
  _renderSeparator: any = (): JSX.Element => <View style={styles.itemSeparator} />

  // handles the PullDown @ y===0 => refresh json
  // setState callback is called immediately after state change
  _handleListRefesh: any = (): void => {
    this.setState({
      isRefreshing: true },
    this._fetchData()
    )
  }
  render(): JSX.Element {
    const itemTitle = this.props.navigation.getParam('itemTitle', null)

    if (this.state.isLoading) {
      return (
        <Container>
          <ActivityIndicator size='large' color={theme.COLOR_IVORY}/>
        </Container>
      )
    }

    return (
      <Container>
        <HeaderBackTitle headerTitle={itemTitle} />
        <View style={[styles.container, { alignItems: 'stretch' }]}>
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            data={this.state.jsonData}
            extraData={this.state.selected}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            ItemSeparatorComponent={this._renderSeparator}
            // showVerticalScrollIndicator={false}
            onRefresh={this._handleListRefesh}
            refreshing={this.state.isRefreshing}
          />
        </View>
      </Container>
    )
  }
}
export default OfferDetailScreen
