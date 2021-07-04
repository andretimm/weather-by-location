import { useEffect, useState } from "react";
import { CurrentPosition } from "../interfaces/CurrentPosition";
import { getLocation } from "../services/LocationService";
import { getWeather } from "../services/OpenWeatherService";

import { StyledWrapper } from "../styles/StyledWrapper";
import Location from "./Location";

export default function Weather() {
  const [currentPlace, setCurrentPlace] = useState<CurrentPosition>();

  useEffect(() => {
    getCurrentLocation().then((data) => {
      setCurrentPlace(data);
      console.log(data);
    });
  }, []);

  async function getCurrentLocation() {
    console.log(getWeather(-26.834512, -48.6407051));
    return await getLocation();
  }

  return (
    <StyledWrapper>
      <Location place={currentPlace?.place} />
    </StyledWrapper>
  );
}
