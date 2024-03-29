import { Dimensions } from 'react-native'
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')

function wp(percentage: number) {
  const value = (percentage * viewportWidth) / 100
  return Math.round(value)
}

function hp(percentage: number) {
  const value = (percentage * viewportHeight) / 100
  return Math.round(value)
}


export { viewportHeight, viewportWidth, wp, hp }