import { createGlobalStyle } from "styled-components";

const Resetcss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    font-size: inherit;
    color: inherit;
    text-decoration: none;
  }

  body {
    background-color: #8D18BE;
  }
`;

export default Resetcss;
