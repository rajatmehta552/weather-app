import React from 'react';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import {style} from '../common/style';

const WeatherList = ({item, listAction}) => {
  return (
    <TouchableOpacity onPress={listAction}>
      <View style={style.listItem}>
        <View>
          <Text style={style.cityName}>{item.name}</Text>
          <Text>{item.weather[0].main}</Text>
        </View>
        <Text style={style.tempText}>{item.main.temp}°C</Text>
      </View>
    </TouchableOpacity>
  );
};

export default WeatherList;
