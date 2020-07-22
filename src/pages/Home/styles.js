import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 50%;
  height: 100%;
  @media (max-width: 880px) {
    width: 95%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;
