import styled from "styled-components";

import Modal from "styled-react-modal";

export const Container = styled.div`
  .actionBar {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    .addOpt {
      border: 2px solid #000;
      width: 100px;
    }
    .searchSection {
      display: flex;
      .searchOpt {
        display: flex;
        input {
          width: 150px;
          height: 30px;
          border: 2.5px solid #000;
          padding-left: 25px;
        }
        img {
          position: absolute;
          margin-top: 10px;
          margin-left: 8px;
          width: 12px;
        }
      }

      .tagsOnly {
        display: flex;
        margin-left: 10px;
        align-items: center;
        label {
          margin-left: 8px;
          font-weight: bold;
        }
        .check {
          width: 15px;
          height: 15px;
          border: 2px solid #000;
        }
      }
    }
  }
`;
export const Button = styled.button`
  border: 2px solid #000;
  width: 150px;
  height: 30px;
  font-size: 18px;
  font-weight: bold;
  :hover {
    opacity: 0.8;
  }
  img {
    margin-right: 5px;
    height: 10px;
    transform: rotateZ(45deg);
  }
`;

export const StyledModal = Modal.styled`
  width: 35%;
  background-color:#F5F4F6;
  border: 4px solid #000;
  padding: 25px;
  @media (max-width: 880px) {
    width: 75%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
  div{
    display:grid;
  }
  label{
    font-weight:bold;
    font-size:20px;
    margin: 15px 0 15px 0 ;
  }
  input{
    padding:10px;
    font-size:15px;
    border: 2px solid #000;
    width:100%;
  }
  textarea{
    padding:10px;
    font-size:15px;
    border: 2px solid #000;
    width:100%;
    height:100px;
  }
  .headModal{
    display:flex;
    align-items:center;
    img {
      margin-right: 15px;
      height: 20px;
      transform: rotateZ(45deg);
    }
  }
  .navButtons{
    display:flex;
    justify-content:flex-end;
    button{
      padding:5px;
      margin-right: 10px;
      font-weight: bold;
      font-size: 15px;
      background:none;
      border: 2px solid #000;
      margin: 15px 15px 15px 15px;
      min-width:100px;
      &:hover{
        opacity:0.7;
      }
    }
  }
`;
