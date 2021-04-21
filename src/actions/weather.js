export const getWeather = () => {
    fetch('http://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&appid=d80a756bfa5cfbf75a46dd6eff498433')
    .then((response) => response.json())
    .then((json) => {
    console.log('json', json)
      return json;
    })
    .catch((error) => {
      console.error(error);
    });
}