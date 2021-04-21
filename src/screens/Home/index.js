import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList, ScrollView} from 'react-native';
import {getWeather} from '../../actions/weather';
import {style} from '../../common/style';
import DefaultScreen from '../../components/defaultScreen';
import WeatherList from '../../components/weatherList';

const Home = ({navigation}) => {
  const [weather, setWeather] = useState('');
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch(
      'http://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&units=metric&appid=d80a756bfa5cfbf75a46dd6eff498433',
    )
      .then(response => response.json())
      .then(json => {
        setWeather(json.list);
      })
      .catch(error => {
        console.error(error);
      });
    setLoader(false);
  }, []);

  const showDetail = (item) => {
    navigation.navigate('City', {data: item});
  }

  return (
    <DefaultScreen>
      <SafeAreaView>
        {loader ? (
          <Text>Loading ... </Text>
        ) : (
          <FlatList
            data={weather}
            renderItem={({item}) => <WeatherList item={item} listAction={() => showDetail(item)}/>}
            keyExtractor={item => item.id}
          />
        )}
      </SafeAreaView>
    </DefaultScreen>
  );
};

export default Home;
