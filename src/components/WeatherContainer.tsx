import { useEffect, useState } from "react";
import { MdRefresh } from "react-icons/md";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
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
  const [load, setLoad] = useState(false);

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
    setLoad(true);
  }

  function refreshWeather() {
    setLoad(false);
    getCurrentLocation();
  }

  if (load) {
    return (
      <StyledWrapper>
        <button onClick={refreshWeather}>
          <MdRefresh />
        </button>
        <div className="wrapper">
          <Location place={currentPlace?.place} />
          <DisplayWeather locationWeather={weather} />
        </div>
      </StyledWrapper>
    );
  } else {
    return (
      <StyledWrapper>
        <div className="wrapper">
          <Loader type="ThreeDots" color="#FFF" height={100} width={100} />
        </div>
      </StyledWrapper>
    );
  }
}
