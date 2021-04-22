import React, {useState} from 'react';
import {useEffect} from 'react';
import {View, Text} from 'react-native';
import {getWeather} from '../../actions/weather';
import { weatherContext } from '../../actions/weatherContext';
import {style} from '../../common/style';

const SplashScreen = ({navigation}) => {
    const {data} = React.useContext(weatherContext);
   useEffect(() => {
    navigation.navigate('Home', {weather: data});
   }, []); 
    
  return (
    <View style={style.splash}>
      <Text style={style.splashText}>WeatherApp</Text>
    </View>
  );
};

export default SplashScreen;
