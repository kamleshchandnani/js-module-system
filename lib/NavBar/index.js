import styled, { injectGlobal } from "styled-components";

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

export default NavBar;