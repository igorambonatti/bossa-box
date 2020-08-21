import styled from "styled-components";

import Modal from "styled-react-modal";
export const Bar = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .searchSection {
    display: flex;
    align-items: center;
    .searchOpt {
      display: flex;

      img {
        position: absolute;
        margin-top: 12.5px;
        margin-left: 15px;
        width: 25px;
      }
    }
  }
`;

export const Container = styled.div``;
export const Input = styled.input`
  width: 403px;
  height: 50px;
  background: #f5f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;
  text-align: left;
  font: normal normal normal 20px/26px Source Sans Pro;
  letter-spacing: 0.4px;
  color: #170c3a;
  opacity: 1;
  padding-left: 50px;
`;
export const Button = styled.button`
  background: #365df0 0% 0% no-repeat padding-box;
  border-radius: 5px;
  width: 174px;
  height: 50px;
  font-size: 18px;
  font: normal normal 600 18px/24px Source Sans Pro;
  letter-spacing: 0.36px;
  color: #ffffff;
  opacity: 1;
  :hover {
    background: #2f55cc 0% 0% no-repeat padding-box;
  }
  img {
    margin-right: 10px;
    height: 10px;
    transform: rotateZ(45deg);
  }
`;
export const Check = styled.div`
  color: #170c3a;
  display: flex;
  margin-left: 10px;
  align-items: center;
  label {
    margin-left: 5px;
  }
  .checkbox {
    width: 15px;
    height: 15px;
    border: 2px solid #000;
  }
`;
export const ModalInput = styled.input`
  width: 100%;
  height: 50px;
  background: #f5f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;
  text-align: left;
  font: normal normal normal 20px/25px Source Sans Pro;
  letter-spacing: 0px;
  color: #170c3a;
  opacity: 1;
`;
export const Field = styled.div`
  margin-top: 15px;
  textarea {
    width: 100%;
    height: 180px;
    background: #f5f4f6 0% 0% no-repeat padding-box;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    opacity: 1;
    text-align: left;
    font: normal normal normal 20px/26px Source Sans Pro;
    letter-spacing: 0.4px;
    color: #170c3a;
    opacity: 1;
  }
`;
export const CancelButton = styled.button`
  background: #f95e5a 0% 0% no-repeat padding-box;
  border-radius: 5px;
  width: 174px;
  height: 50px;
  font-size: 18px;
  font: normal normal 600 18px/24px Source Sans Pro;
  letter-spacing: 0.36px;
  color: #ffffff;
  opacity: 1;
  :hover {
    background: #cc4c4c 0% 0% no-repeat padding-box;
  }
`;
export const StyledModal = Modal.styled`
width: 600px;
background-color:#F5F4F6;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 20px 25px #0000001A;
border-radius: 5px;
padding:25px;
opacity: 1;
  @media (max-width: 880px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
  div{
    display:grid;
  }
  label{
    text-align: left;
    font: normal normal 600 20px/25px Source Sans Pro;
    letter-spacing: 0px;
    color: #170C3A;
    opacity: 1;
    height: 25px;
  }
  
  .headModal{
    text-align: left;
    font: 26px;
    letter-spacing: 0.52px;
    color: #170c3a;
    opacity: 1;
  }
  .navButtons{
    display:flex;
    margin-top:30px;
    justify-content:flex-end;
    button{
    margin-left:29px;
    }
  }
`;
