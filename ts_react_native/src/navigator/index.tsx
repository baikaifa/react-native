import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderStyleInterpolators, CardAnimationContext, CardStyleInterpolators } from '@react-navigation/stack'
import Home from '@/pages/Home'
import Detail from '@/pages/Detail';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { Platform, StyleSheet } from 'react-native';


export type RootStackParamList = {
  Home: undefined;
  Detail: {
    id:number;
  };
}
export type RootStackNavigation = StackNavigationProp<RootStackParamList>

const Stack = createStackNavigator<RootStackParamList>();


export default class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle: {
              ...Platform.select({
                android: {
                  elevation: 0,
                  borderBottomWidth: StyleSheet.hairlineWidth
                }
              })
            }
          }}
        >
          <Stack.Screen name="Home"
            options={{ headerTitle: '首页' }}
            component={Home} />
          <Stack.Screen name="Detail"
            options={{ headerTitle: '详情页' }}
            component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}