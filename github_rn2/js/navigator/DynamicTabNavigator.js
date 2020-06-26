import React, { Component } from 'react';
import PopularPage from '../page/PopularPage'
import TrendingPage from '../page/TrendingPage'
import FavouritePage from '../page/FavouritePage'
import MyPage from '../page/MyPage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PopularPage" component={PopularPage}
        options={{
          tabBarLabel: '最热',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="FavouritePage" component={FavouritePage}
        options={{
          tabBarLabel: '收藏',
          tabBarIcon: ({ tintColor, focused }) => (
            <MaterialIcons name="whatshot"
              color={tintColor} size={26} />
          ),
        }}
      />
      <Tab.Screen name="TrendingPage" component={TrendingPage}
        options={{
          tabBarLabel: '趋势',
          tabBarIcon: ({ tintColor, focused }) => (
            <MaterialIcons name="whatshot"
              color={tintColor} size={26} />
          ),
        }}
      />
      <Tab.Screen name="MyPage" component={MyPage}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({ tintColor, focused }) => (
            <MaterialIcons name="whatshot"
              color={tintColor} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default class DynamicTabNavigator extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true
  }

  render() {
    
    return (
      <MyTabs />
    )
  }
}

