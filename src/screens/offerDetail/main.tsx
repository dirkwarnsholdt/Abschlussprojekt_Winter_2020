import React, { PureComponent } from 'react'
import { ActivityIndicator, View, FlatList } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { Container, HeaderBackTitle, FlatListItem } from '../../components/index'
import { FetchOfferDetailData } from '../../service/index'
import theme, { c4, c5 } from '../../config/theme.style'
import styles from '../../config/styles'

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
  static navigationOptions = {
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
    _getCorrectIndex = (detailData, itemID) => {
      for (let i = 0; i < detailData.length - 1; i++) {
        if (detailData[i].id === itemID) {
          return i
        }
      }
      return null
    }

  // fetches jsonObject from API => data.val
  _fetchData = () => {
    const itemID = this.state.itemID
    FetchOfferDetailData(itemID)
      .then((data) => {
        this.setState({
          isLoading: false,
          isRefreshing: false,
          jsonData: data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  _saveItemID = (itemID: number) => {
    if (typeof itemID === 'number') {
      this.setState({ itemID })
    }
  }

  _fixItemID = async (itemID: number) => {
    await this._saveItemID(itemID)
    await this._fetchData()
  }

  // fetching json from API in cDM
  componentDidMount() {
    const { navigation } = this.props
    const itemID = navigation.getParam('itemID', null)
    this._fixItemID(itemID)
  }

  // having an unique id instead of an index or random number is preferable
  // for performance (prevents rerendering of whole screen once something changes)
  _keyExtractor = (item) => item.id.toString()

  _onPressSelect = (id: string) => {
    this.setState((state) => {
      // copy map instead of chaning state
      const selected = new Map(state.selected)
      selected.set(id, !selected.get(id)) // toggle selection
      return { selected }
    })
  }

    _onPressItem = (id: number, title: string) => {
      this.props.navigation.navigate('DetailScreen', {
        itemID: id,
        itemTitle: title,
        detailData: this.state.jsonData,
        type: 'offerDetail'
      })
    }

  // creates a clickable FlatList Element
  _renderItem = ({ item }) => (
    <FlatListItem
      id={item.id}
      title={item.title}
      content={item.content}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
    />
  )

  // a view with border, essentially just a line as Separator
  _renderSeparator = () => <View style={styles.itemSeparator} />

  // handles the PullDown @ y===0 => refresh json
  // setState callback is called immediately after state change
  _handleListRefesh = () => {
    this.setState({
      isRefreshing: true },
    this._fetchData()
    )
  }
  render() {
    const itemTitle = this.props.navigation.getParam('itemTitle', null)

    if (this.state.isLoading) {
      return (
        <Container color={c4}>
          <ActivityIndicator size='large' color={theme.COLOR_IVORY}/>
        </Container>
      )
    }

    return (
      <Container color={c4}>
        <HeaderBackTitle headerTitle={itemTitle} color={c5}/>
        <View style={[styles.container, { alignItems: 'stretch' }]}>
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            data={this.state.jsonData}
            extraData={this.state.selected}
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
export default OfferDetailScreen
