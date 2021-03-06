import React from 'react';
import {useState} from 'react';
import {View, Text, SafeAreaView, FlatList, ScrollView} from 'react-native';
import {weatherContext} from '../../actions/weatherContext';
import DefaultScreen from '../../components/defaultScreen';
import WeatherList from '../../components/weatherList';

const Home = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const {data, getWeatherData} = React.useContext(weatherContext);

  const showDetail = item => {
    navigation.navigate('City', {data: item});
  };

  const onRefresh = () => {
    setLoader(true);
    getWeatherData();
    setLoader(false);
  };

  return (
    <DefaultScreen>
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <WeatherList item={item} listAction={() => showDetail(item)} />
          )}
          keyExtractor={item => item.id}
          onRefresh={() => onRefresh()}
          refreshing={loader}
        />
      </SafeAreaView>
    </DefaultScreen>
  );
};

export default Home;
