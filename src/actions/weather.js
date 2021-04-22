import { URL } from "../constants/constant";

export function getWeather() {
  return fetch(URL)
      .then(response => response.json())
      .then(res => {
        return res
      });
}
