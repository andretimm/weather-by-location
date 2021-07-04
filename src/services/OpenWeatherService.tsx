import axios from "axios";
import { WeatherInterface } from "../interfaces/WeatherInterface";
import { OPENWEATHER_URL } from "../utils/APIsURL";

export async function getWeather(latitude: number, longitude: number) {
  const URL: string = `${OPENWEATHER_URL}?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_TOKEN}`;
  const openWeatherResponse: any = await axios(URL);
  const weather: WeatherInterface = {
    temp: openWeatherResponse.data.current.temp,
    tempMax: openWeatherResponse.data.daily[0].temp.max,
    tempMin: openWeatherResponse.data.daily[0].temp.min,
    todayWeather: openWeatherResponse.data.daily[0],
    weatherMain: openWeatherResponse.data.daily[0].weather[0].main,
  };
  return weather;
}
