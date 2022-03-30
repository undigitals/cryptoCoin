import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Coin from '../screens/CoinScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={({}) => ({
          headerTitle: 'Home Page',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#f0f3f5' },
        })}
      />
      <Stack.Screen
        name="CoinPage"
        component={Coin}
        options={{
          headerTitle: 'Coin Page',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#f0f3f5' },
        }}
      />
    </Stack.Navigator>
  );
}
