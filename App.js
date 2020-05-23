import * as React from 'react';
import { View, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Feed, Add, Profile, Likes} from './src/screens'
const Stack = createStackNavigator();

function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
        />
    );
}

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator
              screenOptions={{
                  headerStyle: {
                      backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                      fontWeight: 'bold',
                  },
              }}>
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="Feed" component={Feed}
                            options={({ route }) => ({ title: route.params.name })}/>
              <Stack.Screen name="Add" component={Add}
                            options={{ headerTitle: props => <LogoTitle {...props} /> }}/>
              <Stack.Screen name="Likes" component={Likes}
                           />
              <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

;
