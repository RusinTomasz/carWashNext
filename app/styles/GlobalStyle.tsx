import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Montserrat', sans-serif;
  }
  h1,h2 {
    font-weight: 800;
  }
  h3,h4,h5,h6 {
    font-weight: bold;
  }
  h1 {
    font-size: 48px;
    line-height: 50px;
  }

  h2 {
    font-size: 24px;
    line-height: 32px;
  }

  h3 {
    font-size: 18px;
    line-height: 25px;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
  }
  a {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    display: inline-block;
  }
`;

export default GlobalStyle;
