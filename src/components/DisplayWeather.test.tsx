import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DisplayWeather from "./DisplayWeather"
import { WeatherInterface } from '../interfaces/WeatherInterface'

const weather: WeatherInterface = {
    temp: 17,
    weatherMain: 'Nublado',
    weatherBg: 'Clouds;',
    tempMax: 17,
    tempMin:15,
    icon: "https://openweathermap.org/img/wn/02d@2x.png"
  };

test('loads and displays weather by location', async () => {        
  render(<DisplayWeather  locationWeather={weather}/>)

  expect(screen.getByRole('img')).toHaveAttribute('src', weather.icon);
  expect(screen.getByRole('heading', {level:1})).toHaveTextContent(weather.temp.toString());  
  expect(screen.getByRole('heading', {level:2})).toHaveTextContent(weather.weatherMain);  
  expect(screen.getByRole('heading', {level:3})).toHaveTextContent(`${weather.tempMin}ºC / ${weather.tempMax}ºC`);  
  })

