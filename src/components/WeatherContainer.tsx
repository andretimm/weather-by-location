import { useEffect, useState } from "react";
import { CurrentPosition } from "../interfaces/CurrentPosition";
import { WeatherInterface } from "../interfaces/WeatherInterface";
import { getLocation } from "../services/LocationService";
import { getWeather } from "../services/OpenWeatherService";

import { StyledWrapper } from "../styles/StyledWrapper";
import DisplayWeather from "./DisplayWeather";
import Location from "./Location";

export default function WeatherContainer() {
  const [currentPlace, setCurrentPlace] = useState<CurrentPosition>();
  const [weather, setWeather] = useState<WeatherInterface>();

  useEffect(() => {
    getCurrentLocation();
  }, []);

  async function getCurrentLocation() {
    const place = await getLocation();
    setCurrentPlace(place);
    const locationWeather = await getWeather(
      place.coords.latitude,
      place.coords.longitude
    );
    setWeather(locationWeather);
  }

  return (
    <StyledWrapper>
      <Location place={currentPlace?.place} />
      <DisplayWeather weather={weather} />
    </StyledWrapper>
  );
}
