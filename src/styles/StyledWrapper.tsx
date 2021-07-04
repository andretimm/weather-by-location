import styled from "styled-components";
import { StyledBGInterface } from "../interfaces/StyledBGInterface";
import Clear from "../assets/Clear.jpg";
import Clouds from "../assets/Clouds.jpg";
import Drizzle from "../assets/Drizzle.jpg";
import Mist from "../assets/Mist.jpg";
import Rain from "../assets/Rain.jpg";
import Snow from "../assets/Snow.jpg";
import Thunderstorm from "../assets/Thunderstorm.jpg";

export const StyledWrapper = styled.div<StyledBGInterface>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-image: url(${(props) => getBG(props?.weatherBg)});
  background-size: cover;
  background-position: top center;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    text-align: center;
    min-height: 70vh;
  }
  button {
    color: #fff;
    margin: 15px 15px 0 auto;
    background: none;
    border: none;
    padding: 0;
    font-size: 2.5rem;
    cursor: pointer;
  }
  .noPermission {
    color: #fff;
    font-size: 1.5rem;
  }
  .link {
    color: #fff;
    text-decoration: inherit;
    font-size: 1.2rem;
  }
`;

function getBG(weatherBg: string): any {
  switch (weatherBg) {
    case "Thunderstorm":
      return Thunderstorm;
    case "Clear":
      return Clear;
    case "Clouds":
      return Clouds;
    case "Drizzle":
      return Drizzle;
    case "Mist":
      return Mist;
    case "Fog":
      return Mist;
    case "Rain":
      return Rain;
    case "Snow":
      return Snow;
    default:
      return Clear;
  }
}
