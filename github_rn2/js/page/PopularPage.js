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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PopularTab1" component={PopularTab}
        options={{
          title: 'Tab1'
        }}
      />
      <Tab.Screen name="PopularTab2" component={PopularTab}
        options={{
          title: 'Tab2'
        }}
      />
    </Tab.Navigator>
  );
}
class PopularTab extends Component {
  render() {
    return (
      <View><Text>PopularTab</Text></View>
    )
  }
}


export default class PopularPage extends Component {

  render() {
    return (
     
        <MyTabs />
  
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

})