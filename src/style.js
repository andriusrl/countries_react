import styled from 'styled-components';

export const Main = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 900;
  background-color: #C4CBF2;
  padding-bottom: 3%;
`
export const OrderWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 7px;
  margin-bottom: 3%;
  background-color: #ABB5ED;
`
export const Button = styled.button`
  height: 39px;
  margin: 0 3px 0 3px;
  font-size: 14px;
  font-weight: 600;
  background-color: #C4CBF2;
  border-radius: 10px;
  border-color: grey;
`
export const Pages = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1% 3% 0 1%;
  button {
    border: 1px solid black;
    padding: 8px;
    margin: 0;
    background-color: #ADB8EB;
    font-weight: bold;
    /* color: #333333; */
  }
  button:nth-of-type(1){
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    border-color: #333333;

  }
  button:nth-of-type(2){
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    border-color: #333333;
  }
`
export const NumPages = styled.div`
  display: flex;
  align-items: center;
`
export const Loading = styled.div`
  margin: 44vh 0 44vh;
`