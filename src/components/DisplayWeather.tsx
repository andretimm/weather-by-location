import { StyledWeather } from "../styles/StyledWeather";

export default function DisplayWeather(weather: any) {
  return (
    <StyledWeather>
      <h1>
        18<span>&#186;C</span>
      </h1>
      <h2>Nublado</h2>
      <h3>12<span>&#186;C</span> / 19<span>&#186;C</span></h3>
    </StyledWeather>
  );
}
