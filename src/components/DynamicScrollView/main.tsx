import React, { Component } from 'react'
import { SafeAreaView, StatusBar, View, ScrollView, Dimensions } from 'react-native'
import styles from './styles'

const { height } = Dimensions.get('window')


export default class DynamicScrollView extends Component {
  constructor() {
    super()

    this.state = {
      screenHeight: height
    }
  }

  _handleContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight })
  }

  render() {
    const color = this.props.color
    const scrollEnabled = this.state.screenHeight > height
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: color }]}>
        <StatusBar barStyle='light-content' backgroundColor='#468189' />
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.scrollview}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this._handleContentSizeChange}
        >
          <View style={styles.content}>
            {this.props.children}
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
