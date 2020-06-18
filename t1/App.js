/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Image, ImageBackground,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  let colorArr = ['red', 'green', 'blue', 'pink']
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        {/* <Text>
          11122232423
          <Image
            style={styles.i}
            source={require('./assets/imgs/1.jpg')}
          />
          <Image
            style={styles.i}
            source={{ uri: 'http://placehold.it/800x300' }}
          />

        </Text> */}

        <View>
          <ScrollView>
            {
              colorArr.map((item, i) => {
                return (
                  <React.Fragment>
                    <View
                      style={{
                        width: Dimensions.get('window').width,
                        height: 300,
                        backgroundColor: colorArr[i]
                      }}
                      key={i}
                    >
                      <Text>{i}</Text>
                    </View></React.Fragment>
                );
              })
            }
          </ScrollView>
        </View>


      </View>

    </>
  );

};

const styles = StyleSheet.create({
  i: {
    width: 100,
    height: 200
  },

});

export default App;
