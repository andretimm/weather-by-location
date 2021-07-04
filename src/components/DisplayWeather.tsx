import { StyledWeather } from "../styles/StyledWeather";

export default function DisplayWeather(weather: any) {
  return (
    <StyledWeather>
      <img src={weather?.locationWeather?.icon} alt="" />
      <h1>
        {weather?.locationWeather?.temp}
        <span>&#186;C</span>
      </h1>
      <h2 style={{ textTransform: "capitalize" }}>
        {weather?.locationWeather?.weatherMain}
      </h2>
      <h3>
        {weather?.locationWeather?.tempMin}
        <span>&#186;C</span> / {weather?.locationWeather?.tempMax}
        <span>&#186;C</span>
      </h3>
    </StyledWeather>
  );
}
