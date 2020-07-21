import styled from "styled-components";

export const Container = styled.div``;

export const Tools = styled.div`
  padding: 15px;
  margin: 30px 0 30px 0;
  border: 4px solid #000;
  h2 {
    font-style: none;
    font-size: 15px;
    font-weight: 600;
    max-width: 95%;
    margin: 15px 0 15px 0;
  }
  .tags {
    max-width: 95%;
    display: flex;
    @media (max-width: 470px) {
      display: block;
    }
    p {
      font-weight: bold;
      margin-right: 5px;
    }
  }
  .toolHead {
    justify-content: space-between;
    display: flex;
    align-items: center;

    a {
      font-size: 12px;
      color: #365df0;
    }

    button {
      display: flex;
      align-items: center;

      margin-right: 10px;
      font-weight: bold;
      font-size: 18px;
      img {
        height: 15px;
        margin-right: 5px;
      }
    }
  }
`;
