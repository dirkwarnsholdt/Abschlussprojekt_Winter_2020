import React, { PureComponent } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { Container, Header } from '../../components/index'
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
          ---- CONTENT ----
        </View>
      </Container>
    )
  }
}
export default NewsScreen
