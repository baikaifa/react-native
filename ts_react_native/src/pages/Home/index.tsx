import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackNavigation } from '@/navigator/index';
import { connect, Connect, ConnectedProps } from 'react-redux'
import { RootState } from '@/models/index'
import Carousel from '@/pages/Home/Carousel';

const mapStateToProps = ({ home, loading }: RootState) => {
  return {
    carousels: home.carousels,
    loading: loading.effects['/home/asyncAdd']
  }

}
const connector = connect(mapStateToProps)

type ModelState = ConnectedProps<typeof connector>


interface IProps extends ModelState {
  navigation: RootStackNavigation
}

export default connector(class Home extends React.Component<IProps> {
  componentDidMount = async () => {
    const { dispatch } = this.props
    dispatch({
      type: 'home/fetchCarousels'
    })
  }
  render() {
    const { carousels} = this.props
    return (
      <View>
        <Carousel  data={carousels}/>
      </View >

    )
  }
}
)