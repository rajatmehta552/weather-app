import React, { useState, useEffect } from 'react';
import {weatherContext} from './actions/weatherContext';
import { getWeather } from './actions/weather';
import Routes from './routes';

const WeatherApp = () => {
  const [data, setData] = useState('');
  const getWeatherData = async () => {
  const newData = await getWeather();
      setData(newData);
  }
  useEffect(() => {
    (async function anyNameFunction() {
     await getWeatherData();
    })();
  }, []);
  return (
    <weatherContext.Provider value={{data: data.list, getWeatherData}}>
      <Routes />
    </weatherContext.Provider>
  );
};

export default WeatherApp;
