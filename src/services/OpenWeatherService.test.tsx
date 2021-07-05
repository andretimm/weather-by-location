import '@testing-library/jest-dom/extend-expect'
import { getWeather } from './OpenWeatherService'

test('get weather data', async () => {
    const data = await getWeather(-26.8779, -48.6887);
    expect(data.temp).not.toBeNull();
});