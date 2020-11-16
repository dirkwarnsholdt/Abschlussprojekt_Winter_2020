import React, { PureComponent } from 'react'
import { NavigationScreenProp } from 'react-navigation'
import { Container, Header } from '../../components/index'
import ImageSlider from 'react-native-image-slider'


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

class GalleryScreen extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isLoading: true,
      jsonData: [],
      isRefreshing: false
    }
  }

  render(): JSX.Element {
    return (
      <Container>
        <Header />
        <ImageSlider images={[
          require('../../assets/img/test1.jpg'),
          require('../../assets/img/test2.jpg'),
          require('../../assets/img/test3.jpg'),
          require('../../assets/img/test4.png')
          ]}
        />
      </Container>
    )
  }
}
export default GalleryScreen
