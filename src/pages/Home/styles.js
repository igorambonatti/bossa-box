import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  height: 100%;
  width: 90%;
  @media (min-width: 1100px) {
    width: 50%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;
