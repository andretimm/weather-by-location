import styled from "styled-components";

export const StyledWeather = styled.div`
  color: #fff;
  img {
    width: 7rem;
    margin-top: 15px;
  }
  h1 {
    font-size: 6rem;
    margin-bottom: 30px;
    & span {
      font-size: 4.5rem;
      font-weight: 500;
    }
  }
  h2 {
    font-size: 2rem;
    font-weight: 700;
    font-style: italic;
    margin-bottom: 15px;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    & span {
      font-size: 1rem;
      font-weight: 200;
    }
  }
`;
