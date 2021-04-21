import React from 'react';
import {Text, View, Image} from 'react-native';
import DefaultScreen from '../../components/defaultScreen';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import { style } from '../../common/style';

const City = ({route}) => {
  const {data} = route.params;
  return (
    <DefaultScreen>
      <View style={style.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={style.map}
          region={{
            latitude: data.coord.lat,
            longitude: data.coord.lon,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker coordinate={{ latitude: data.coord.lat, longitude: data.coord.lon }}>
            <Image source={require('../../assets/images/pin.png')} style={style.mapPin} />
            <Text style={style.pinText}>{data.name}</Text>
          </Marker>
          </MapView>
      </View>
      <View style={style.infoContainer}>
        <View>
          <Text style={style.cityName}>{data.name}</Text>
          <Text style={style.infoText}>{data.weather[0].main}</Text>
          <Text style={style.infoText}>Humidity: {data.main.humidity}</Text>
          <Text style={style.infoText}>Wind Speed: {data.wind.speed}</Text>
          <Text style={style.infoText}>Max. Temp: {data.main.temp_min}°c</Text>
          <Text style={style.infoText}>Min. Temp: {data.main.temp_max}°c</Text>
        </View>
        <View style={style.tempContainer}>
          <View style={{alignItems: 'center'}}>
            <Text style={style.tempText}>{data.main.temp}°c</Text>
            <Image
              style={style.cloudImg}
              source={require('../../assets/images/clouds.png')}
            />
          </View>
        </View>
      </View>
    </DefaultScreen>
  );
};

export default City;
