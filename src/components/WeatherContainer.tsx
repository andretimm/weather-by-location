import { useEffect, useState } from "react";
import { MdRefresh } from "react-icons/md";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { CurrentPosition } from "../interfaces/CurrentPosition";
import { WeatherInterface } from "../interfaces/WeatherInterface";
import {
  getLocation,
  getNavigatorPermission,
} from "../services/LocationService";
import { getWeather } from "../services/OpenWeatherService";
import { StyledWrapper } from "../styles/StyledWrapper";
import DisplayWeather from "./DisplayWeather";
import Location from "./Location";

export default function WeatherContainer() {
  const [currentPlace, setCurrentPlace] = useState<CurrentPosition>();
  const [weather, setWeather] = useState<WeatherInterface>();
  const [load, setLoad] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  
  useEffect(() => {
    getCurrentLocation();
  }, []);

  async function getCurrentLocation() {
    const permission: boolean = await getNavigatorPermission();
    setHasPermission(permission);
    if (permission) {
      const place = await getLocation();
      setCurrentPlace(place);
      const locationWeather = await getWeather(
        place.coords.latitude,
        place.coords.longitude
      );
      setWeather(locationWeather);
    }
    setLoad(true);
  }

  function refreshWeather() {
    setLoad(false);
    getCurrentLocation();
  }

  if (load) {
    if (hasPermission) {
      return (
        <StyledWrapper weatherBg={weather?.weatherBg}>
          <div className="bgImage"></div>
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
        <StyledWrapper weatherBg="">
          <button onClick={refreshWeather}>
            <MdRefresh />
          </button>
          <div className="wrapper">
            <h1 className="noPermission">
              Para correto funcionamento, precisamos ter acesso a sua
              localização atual. Caso tenha duvida de como fazer segue link para
              os principais navegadores.
            </h1>
            <br />
            <a
              className="link"
              rel="noreferrer"
              href="https://support.google.com/chrome/answer/114662?co=GENIE.Platform%3DDesktop&hl=pt-BR#zippy="
              target="_blank"
            >
              Chrome
            </a>
            <a
              className="link"
              rel="noreferrer"
              href="https://support.mozilla.org/pt-BR/kb/o-firefox-compartilha-minha-localizacao-com-sites#:~:text=Na%20se%C3%A7%C3%A3o%20Permiss%C3%B5es%2C%20clique%20no%20bot%C3%A3o%20Configura%C3%A7%C3%B5es%E2%80%A6,Clique%20em%20Salvar%20altera%C3%A7%C3%B5es."
              target="_blank"
            >
              Firefox
            </a>
            <a
              className="link"
              rel="noreferrer"
              href="https://support.apple.com/pt-br/guide/safari/ibrw7f78f7fe/mac"
              target="_blank"
            >
              Safari
            </a>
          </div>
        </StyledWrapper>
      );
    }
  } else {
    return (
      <StyledWrapper weatherBg="">
        <div className="wrapper">
          <Loader type="ThreeDots" color="#FFF" height={100} width={100} />
        </div>
      </StyledWrapper>
    );
  }
}
