import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackNavigation } from '@/navigator/index';

interface IProps {
  navigation: RootStackNavigation
}

export default class Home extends React.Component<IProps> {
  render() {
    const { navigation } = this.props
    return (
      <View>
        <Text>Home</Text>
        <Button title="跳转到详情页"
          onPress={() => {
            navigation.navigate('Detail', {
              id: 100
            })
          }}
        />
      </View>
    )
  }
}

