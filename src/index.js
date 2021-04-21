import React from 'react';
import Navigation from './navigation';
import { NavigationContainer } from '@react-navigation/native';

const WeatherApp = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default WeatherApp;
