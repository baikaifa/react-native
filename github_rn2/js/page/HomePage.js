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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import PopularPage from '../page/PopularPage'
import TrendingPage from '../page/TrendingPage'
import FavouritePage from '../page/FavouritePage'
import MyPage from '../page/MyPage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator'
// const Tab = createBottomTabNavigator();
// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="PopularPage" component={PopularPage}
//         options={{
//           tabBarLabel: '最热',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen name="FavouritePage" component={FavouritePage}
//         options={{
//           tabBarLabel: '收藏',
//           tabBarIcon: ({ tintColor, focused }) => (
//             <MaterialIcons name="whatshot"
//               color={tintColor} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen name="TrendingPage" component={TrendingPage}
//         options={{
//           tabBarLabel: '趋势',
//           tabBarIcon: ({ tintColor, focused }) => (
//             <MaterialIcons name="whatshot"
//               color={tintColor} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen name="MyPage" component={MyPage}
//         options={{
//           tabBarLabel: '我的',
//           tabBarIcon: ({ tintColor, focused }) => (
//             <MaterialIcons name="whatshot"
//               color={tintColor} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

export default class HomePage extends Component {

  render() {

    return (
      <DynamicTabNavigator />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})