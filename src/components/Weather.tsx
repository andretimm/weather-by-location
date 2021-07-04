import { useEffect, useState } from "react";
import { CurrentPosition } from "../interfaces/CurrentPosition";
import { getLocation } from "../services/LocationService";

import { StyledWrapper } from "../styles/StyledWrapper";
import Location from "./Location";

export default function Weather() {
  const [currentPlace, setCurrentPlace] = useState<CurrentPosition>();

  useEffect(() => {
    getCurrentLocation().then((data) => {
      setCurrentPlace(data);
    });
  }, []);

  async function getCurrentLocation() {
    return await getLocation();
  }

  return (
    <StyledWrapper>
      <Location place={currentPlace?.place} />
    </StyledWrapper>
  );
}
