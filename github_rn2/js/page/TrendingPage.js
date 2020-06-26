import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
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


export default class TrendingPage extends Component {
  componentDidMount = async () => {
    this.timer = setTimeout(() => {

    }, 2000)
  }
  UNSAFE_componentWillMount() {
    //页面销毁时，清空计时器
    this.timer && clearTimeout(this.timer)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          趋势
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

})