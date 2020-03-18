import React from 'react'
import { NavigationScreenProp } from 'react-navigation'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'

type Props = {
  navigation: NavigationScreenProp<any>
}

type State = {
  isLoadingComplete: boolean
}

export default class LoadingScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isLoadingComplete: false
    }
  }

  render(): JSX.Element {
    return (
      <AppLoading
        startAsync={this._loadResourcesAsync}
        onError={this._handleLoadingError}
        onFinish={this._handleFinishLoading}
      />
    )
  }

 _loadResourcesAsync: any = async (): Promise<void> => {
   await Promise.all([
     Asset.loadAsync([
       require('../../../src/assets/img/tsbw_home.png'),
       require('../../../src/assets/img/tsbwLogo.png')
     ]),
     Font.loadAsync({
       robotoRegular: require('../../../src/assets/font/Roboto-Regular.ttf'),
       robotoCondensed: require('../../../src/assets/font/robotoCondensed.ttf'),
       impact: require('../../../src/assets/font/impact.ttf'),
       latoLightitalic: require('../../../src/assets/font/Lato-LightItalic.ttf'),
       latoHairline: require('../../../src/assets/font/Lato-Hairline.ttf')
     })
   ])
 }

 _handleLoadingError: any = (error: Error): void => {
   console.log(error)
 }

 _handleFinishLoading: any = (): void => {
   this.setState({ isLoadingComplete: true })
   this.props.navigation.navigate('App')
 }
}
