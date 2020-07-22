import styled from "styled-components";

import Modal from "styled-react-modal";

export const Container = styled.div``;

export const Tools = styled.div`
  padding: 15px;
  margin: 30px 0 30px 0;
  border: 4px solid #000;
  word-wrap: break-word;
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
    flex-wrap: wrap;

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

export const StyledModal = Modal.styled`
padding: 20px;
width: 40%;
background-color:#F5F4F6;
border: 4px solid #000;
@media (max-width: 880px) {
  width:80%;
}
@media (max-width: 400px) {
  width: 100%;
}
  header{
    display:flex;
    align-items:center;
    font-size:15px;
    img{
      height:20px;
      margin-right: 20px;
    }
  }
  p{
    margin: 20px 0 20px 0;
    font-size:22px;
    font-weight:bold;
  }
  div{ 
    display:flex;
    justify-content:flex-end;
    button{
      padding:5px;
      margin-right: 10px;
      font-weight: bold;
      font-size: 15px;
      background:none;
      border: 2px solid #000;
      margin: 0 15px 0 15px;
      min-width:100px;
      &:hover{
        opacity:0.7;
      }
    }
  }
`;
