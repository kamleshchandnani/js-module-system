import styled, { injectGlobal } from 'styled-components';

const Button = styled.button`
  background: #2cc1ed;
  color: #fff;
  border: 1px solid #1d99bd;
  border-radius: 2px;
  padding: 10px;
  width: 100%;
  outline: none;
  font-size: 16px;
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 10px;
`;

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background: #EEE;
    color: #FFF;
    font-family: 'Nunito', sans-serif;
  }
`;

const NavBar = styled.div`
  height: 30px;
  padding: 10px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

export { Button, Card, NavBar };
