import styled from "styled-components";

export const StyledWeather = styled.div`
  color: #fff;
  h1 {
    font-size: 6rem;
    margin: 30px 0px;
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
