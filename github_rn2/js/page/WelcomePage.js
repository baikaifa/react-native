import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationUtil from '../navigator/NavigationUtil'
export default class WelcomePage extends Component {
  componentDidMount = async () => {
    this.timer = setTimeout(() => {
      NavigationUtil.resetToHomPage(this.props)
    }, 0)
  }
  UNSAFE_componentWillMount() {
    //页面销毁时，清空计时器
    this.timer && clearTimeout(this.timer)
  }

  render() {
    const { navigation } = this.props

    return (
      <>

        <Button
          title="去 HomePage"
          onPress={() => {
            navigation.navigate('HomePage')
          }}
        >
        </Button>
        <View>
          <Text>
            WelcomePage
        <Ionicons name='caretup'
              size={50}
              style={{ color: 'blue' }}
            />
            <Icon name="stepforward" size={15} color="red" />
            <Icon name="id-card-o" size={25} color="green" />
          </Text>
        </View>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})