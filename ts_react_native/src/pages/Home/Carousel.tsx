import React, { Component } from 'react';
import SnapCarousel, {
  AdditionalParallaxProps,
  ParallaxImage,
  Pagination
} from 'react-native-snap-carousel'
import { viewportWidth, wp, hp } from '@/utils/index';
import { Image } from 'react-native';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ICarousel } from '@/models/Home'
const data = [
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593790127173&di=22a6dfbb3234587421d384670c231b85&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F537ea15ed93fa.jpg",
  "http://placehold.it/600x300",
  "http://placehold.it/400x300",

]

interface IProps {
  data: ICarousel[]
}

const sliderWidth = viewportWidth
const sideWidth = wp(90)
const sideheight = hp(30)
const itemWidth = wp(90) + wp(2) * 2

export default class Carousel extends React.Component<IProps> {

  state = {
    activeSlide: 0
  }

  onSnapToItem = (index: number) => {
    this.setState((prevState) => ({
      activeSlide: index
    }))
  }

  renderItem = ({ item }: { item: ICarousel }, parallaxProps?: AdditionalParallaxProps) => {
    return <ParallaxImage
      source={{ uri: item.image }}
      style={styles.image}
      containerStyle={styles.imageContainer}
      parallaxFactor={0.8}
      showSpinner
      spinnerColor="rgba(0,0,0,0.25)"
      {...parallaxProps}
    />
  }

  get pagination() {
    const { data } = this.props
    const { activeSlide } = this.state
    return (
      <View style={styles.paginationWrapper}>
        <Pagination
          containerStyle={styles.paginationContainer}
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          dotContainerStyle={styles.dotContainer}
          dotStyle={styles.dot}
          inactiveDotScale={0.8}
        // inactiveDotColor={0.4}
        />
      </View>
    )
  }

  render() {
    const { data } = this.props
    return (
      <View >
        <SnapCarousel
          data={data}
          renderItem={this.renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages
          loop
          onSnapToItem={this.onSnapToItem}
          autoplay
        />
        {this.pagination}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  dotContainer: {
    marginHorizontal: 6,
  },
  imageContainer: {
    width: itemWidth,
    height: sideheight,
    borderRadius: 8
  },
  paginationWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.92)'
  },
  paginationContainer: {
    position: 'absolute',
    top: -20,
    backgroundColor: 'rgba(0,0,0,0.35)',
    paddingHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 8
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover'
  }

})