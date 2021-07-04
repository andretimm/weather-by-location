import axios from "axios";
import { WeatherInterface } from "../interfaces/WeatherInterface";
import { OPENWEATHER_URL } from "../utils/APIsURL";

export async function getWeather(
  latitude: number | undefined,
  longitude: number | undefined
) {
  const URL: string = `${OPENWEATHER_URL}?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_TOKEN}&lang=pt_br`;
  const openWeatherResponse: any = await axios(URL);
  console.log(openWeatherResponse.data); 
  const weather: WeatherInterface = {
    temp: Math.round(openWeatherResponse.data.current.temp),
    tempMax: Math.round(openWeatherResponse.data.daily[0].temp.max),
    tempMin: Math.round(openWeatherResponse.data.daily[0].temp.min),
    weatherMain: openWeatherResponse.data.daily[0].weather[0].description,
    icon: `http://openweathermap.org/img/wn/${openWeatherResponse.data.daily[0].weather[0].icon}@2x.png`,
  };
  return weather;
}
