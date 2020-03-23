import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { DynamicScrollView } from '../../components/index'
import { unescapeString } from '../../lib/unescapeString'
import { url } from '../../config/constants'
import styles from './styles'
import theme from '../../config/theme.style'

type Props = {
  navigation: NavigationScreenProp<any>,
  getParam: any,
  styleParam: string,
  _getCorrectTitleText: any,
  _getCorrectBodyText: any
}

type State = {
  imageFetched: boolean,
  imageUrl: string | null
}

class DetailScreen extends Component<Props, State> {
  static navigationOptions: any = ({ navigation }: {navigation: NavigationScreenProp<any>}): any => {
    return {
      title: navigation.state.params.itemTitle,
      headerStyle: {
        backgroundColor: theme.COLOR_HEADER
      },
      headerTitleStyle: {
        color: theme.COLOR_IVORY,
        fontFamily: theme.FONT_FAMILY_TITLE,
        fontSize: theme.FONT_SIZE_MEDIUM,
        fontWeight: theme.FONT_WEIGHT_LIGHT
      }
    }
  }

  constructor(props: any) {
    super(props)

    this.state = {
      imageFetched: false,
      imageUrl: null
    }
  }

  _getCorrectIndex: any = (detailData: any, itemID: number): number | null => {
    for (let i = 0; i < detailData.length; i++) {
      if (detailData[i].id === itemID) {
        return i
      }
    }
    return null
  }

  // wrapping escape Sequences in {' '} to escape them
  _getCorrectBodyText: any = (detailData: any, itemID: number): string => {
    const index = this._getCorrectIndex(detailData, itemID)
    const string = (JSON.stringify(detailData[index].content)).slice(1, -1)

    // used to manually 'unescape' string from API
    return unescapeString(string)
  }

  // creating correct url to fetch image from
  _getCorrectImage: any = (): void => {
    const { navigation } = this.props
    const itemType: string | null = navigation.getParam('type', null)
    const itemID: string | null = navigation.getParam('itemID', null)

    if (!this.state.imageFetched) {
      let imageUrl = ''

      if (typeof itemType === 'string') {
        imageUrl = url + '/files'

        if (itemType === 'offer') {
          imageUrl = imageUrl + '/offer_' + itemID + '.jpg'
        }
        if (itemType === 'offerDetail') {
          imageUrl = imageUrl + '/offer_detail_' + itemID + '.jpg'
        }
        if (itemType === 'news') {
          imageUrl = imageUrl + '/news_' + itemID + '.jpg'
        }
      }
      this.setState({ imageFetched: true, imageUrl })
    }
  }

  componentDidMount(): any {
    this._getCorrectImage()
  }

  render(): JSX.Element {
    const { navigation } = this.props
    const itemID = navigation.getParam('itemID', null)
    const detailData = navigation.getParam('detailData', [])

    const bodyText = this._getCorrectBodyText(detailData, itemID)

    return !itemID ?
      <View><Text> something bad happened... </Text></View> :

      <DynamicScrollView>
        <View style={{ flex: 1 }}>
          <View style={styles.bodyContainer}>
            <Text style={styles.bodyText}>
              {bodyText}
            </Text>
          </View>
          { this.state.imageUrl ? <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: this.state.imageUrl }}
              resizeMode='cover' />
          </View> : null }
        </View>
      </DynamicScrollView>
  }
}

export default DetailScreen

