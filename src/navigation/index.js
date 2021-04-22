import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import City from '../screens/city';
import {primary} from '../constants/colors';
import SplashScreen from '../screens/splash';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
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
        options={{headerShown: false}}
        name="Splash"
        component={SplashScreen}
      />
      <Stack.Screen
        name="Home"
        options={{headerLeft: () => null}}
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
