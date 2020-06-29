import React, { Component } from 'react';
import { NavigationContainer, TabNavigationState } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '@/pages/Home'
import Listen from '@/pages/Listen'
import { RouteProp } from '@react-navigation/native';
import Found from '@/pages/Found'

import Account from '@/pages/Account'
import { RootStackNavigation, RootStackParamList } from '.';

export type BottomTabParamList = {
  Home: undefined
  Listen: undefined;
  Found: undefined;
  Account: undefined;
}

const Tab = createBottomTabNavigator<BottomTabParamList>();

type Route = RouteProp<RootStackParamList, 'BottomTabs'>
  & { state?: TabNavigationState }

interface IProps {
  navigation: RootStackNavigation;
  route: Route
}
function getHeaderTitle(route: Route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home'
  switch (routeName) {
    case 'Home':
      return '首页'
      break;
    case 'Listen':
      return '我听'
      break;
    case 'Found':
      return '发现'
      break;
    case 'Account':
      return '账户'
      break;
    default:
      return '首页'
      break;
  }
}
export default class BottomTabs extends React.Component<IProps> {

  componentDidUpdate = async () => {
    const { navigation, route } = this.props;
    navigation.setOptions({
      headerTitle: getHeaderTitle(route)
    })
  }

  render() {
    return (
      <
        >
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#f86442'
          }}
        >
          <Tab.Screen name="Home" component={Home}
            options={{ tabBarLabel: '首页' }}
          />
          <Tab.Screen name="Listen" component={Listen}
            options={{ tabBarLabel: '我听' }}
          />
          <Tab.Screen name="Found" component={Found}
            options={{ tabBarLabel: '发现' }}
          />
          <Tab.Screen name="Account" component={Account}
            options={{ tabBarLabel: '我的' }}
          />
        </Tab.Navigator>
      </>
    )
  }
}





