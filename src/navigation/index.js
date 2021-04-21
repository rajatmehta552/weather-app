import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import City from '../screens/city';
import {primary} from '../constants/colors';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: primary,
          height: 70,
        },
        headerTitle: 'WeatherApp',
        headerTintColor: '#ffff',
        headerTitleStyle: {alignSelf: 'center'}
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerTitleContainerStyle: {
            left: 0,
          },
        }}
        name="City"
        component={City}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
