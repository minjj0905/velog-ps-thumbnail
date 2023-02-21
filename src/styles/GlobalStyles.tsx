import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  html {
  }
  a{
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  *{ 
    box-sizing: border-box;
  }
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
    input:focus {
    outline: none;
  }
  button {
    border: none;
    background: none;
    padding: 0;
    all: unset; 
    cursor: pointer;
  }
    `;

export default GlobalStyles;
