import styled from "styled-components";

import Modal from "styled-react-modal";

export const Container = styled.div``;

export const Tools = styled.div`
  padding: 15px;
  margin: 30px 0 30px 0;
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 10px #0000000d;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;
  word-wrap: break-word;
  h2 {
    font-style: none;
    font-size: 15px;
    font-weight: 100;
    max-width: 95%;
    margin: 20px 0 15px 0;
  }
  .tags {
    margin-top: 100px;
    max-width: 95%;
    display: flex;
    flex-wrap: wrap;
    font-weight: bold;
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
      font-size: 20px;
      color: #170c3a;
      text-decoration: none;
    }
  }
`;
export const RemoveButton = styled.button`
  background: #f95e5a 0% 0% no-repeat padding-box;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  font: normal normal 600 18px/24px Source Sans Pro;
  letter-spacing: 0.36px;
  color: #ffffff;
  opacity: 1;
  :hover {
    background: #cc4c4c 0% 0% no-repeat padding-box;
  }
  img {
    margin-right: 10px;
    height: 10px;
  }
`;
export const StyledModal = Modal.styled`
width: 960px;
background-color:#F5F4F6;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 20px 25px #0000001A;
border-radius: 5px;
padding:25px;
opacity: 1;
@media (max-width: 880px) {
  width:80%;
}
@media (max-width: 400px) {
  width: 100%;
}
  header{
    text-align: left;
    font-style:none;
    font-size: 20px;
    letter-spacing: 0.52px;
    color: #170C3A;
    opacity: 1;
  }
  p{
    font-size:20px;
    margin-top:30px;
    margin-bottom:30px;
    text-align: left;
    font: normal normal normal 20px/26px Source Sans Pro;
    letter-spacing: 0.4px;
    color: #8F8A9B;
    opacity: 1;
  }
  div{ 
    display:flex;
    justify-content:flex-end;
    .primary{
      width: 50px;
      height: 50px;
      background: #F95E5A 0% 0% no-repeat padding-box;
      border-radius: 5px;
      opacity: 1;
      text-align: center;
      font: normal normal 600 18px/24px Source Sans Pro;
      letter-spacing: 0.36px;
      color: #FFFFFF;
      opacity: 1;
      margin-left:39px;
      :hover{
        background: #CC4C4C 0% 0% no-repeat padding-box;
      }
    }
    .secundary{
      width: 122px;
      height: 50px;
      background: #365DF0 0% 0% no-repeat padding-box;
      border-radius: 5px;
      opacity: 1;
      text-align: center;
      font: normal normal 600 18px/24px Source Sans Pro;
      letter-spacing: 0.36px;
      color: #FFFFFF;
      opacity: 1;
      :hover{
        background: #2F55CC 0% 0% no-repeat padding-box;
      }
    }
  }
`;
