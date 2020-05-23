import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Feed, Add, Profile, Likes} from './src/screens'
const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Feed" component={Feed} />
              <Stack.Screen name="Add" component={Add} />
              <Stack.Screen name="Likes" component={Likes} />
              <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

;
