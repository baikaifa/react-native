import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from '../page/WelcomePage'
import HomePage from '../page/HomePage'
function InitNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WelcomePage" component={WelcomePage}
      />
    </Stack.Navigator>
  );
}
function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer
    >
      <Stack.Navigator>
        <Stack.Screen name="WelcomePage" component={WelcomePage}
        />
        <Stack.Screen name="HomePage" component={HomePage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}