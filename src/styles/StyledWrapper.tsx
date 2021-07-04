import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #ab003c, #aa2e25);
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
`;
