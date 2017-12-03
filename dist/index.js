'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);

const Button = styled__default.button`
  background: #2cc1ed;
  color: #fff;
  border: 1px solid #1d99bd;
  border-radius: 2px;
  padding: 10px;
  width: 100%;
  outline: none;
  font-size: 16px;
`;

const Card = styled__default.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 10px;
`;

styled.injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background: #EEE;
    color: #FFF;
    font-family: 'Nunito', sans-serif;
  }
`;

const NavBar = styled__default.div`
  height: 30px;
  padding: 10px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

exports.Button = Button;
exports.Card = Card;
exports.NavBar = NavBar;
