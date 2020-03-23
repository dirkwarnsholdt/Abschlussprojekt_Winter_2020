import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { DynamicScrollView } from '../../components/index'
import { unescapeString } from '../../lib/unescapeString'
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
  constructor() {
    super()

    this.state = {
      imageFetched: false,
      imageUrl: null
    }
  }

  static navigationOptions: any = ({ navigation }: {navigation: NavigationScreenProp<any>}): any => {
    return {
      title: navigation.state.params.itemTitle,
      headerStyle: {
        backgroundColor: theme.BACKGROUND_COLOR
      },
      headerTitleStyle: {
        color: theme.COLOR_IVORY,
        fontWeight: theme.FONT_WEIGHT_MEDIUM,
        fontFamily: theme.FONT_FAMILY_CAPTION
      }
    }
  }

  _getCorrectIndex = (detailData, itemID) => {
    for (let i = 0; i < detailData.length; i++) {
      if (detailData[i].id === itemID) {
        return i
      }
    }
    return null
  }

  // wrapping escape Sequences in {' '} to escape them
  _getCorrectTitleText = (detailData, itemID) => {
    let index = this._getCorrectIndex(detailData, itemID)
    let string = (JSON.stringify(detailData[index].title)).slice(1, -1)
    return string
  }

  componentDidMount() {
    this._getCorrectImage()
  }

  render() {
    const { navigation } = this.props
    const itemID = navigation.getParam('itemID', null)
    const detailData = navigation.getParam('detailData', [])
    const styles = this._getCorrectStyles(navigation.getParam('styleParam', 'default'))

    // const titleText = this._getCorrectTitleText(detailData, itemID)
    const bodyText = this._getCorrectBodyText(detailData, itemID)

    return !itemID ?
      <View><Text> something bad happened... </Text></View> :

      <DynamicScrollView>
        {/* removing Title since its in the Header, may have some usefullness but idk */}
        <View style={{ flex: 1 }}>
          {/*   <View style={styles.titleContainer}> */}
          {/*     <Text style={styles.titleText}>{titleText}</Text> */}
          {/*   </View> */}
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

