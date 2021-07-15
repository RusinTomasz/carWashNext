import { createGlobalStyle } from "styled-components";
import { colors } from "../styles/variables";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  h1 {
    font-size: 32px;
    font-weight: 400;
    line-height: 48px;
    font-family: "Exo", sans-serif;
  }

  h2 {
    font-size: 28px;
    line-height: 48px;
    font-weight: 400;
    margin: 0;
  }

  h3 {
    font-size: 26px;
    font-weight: 400;
    line-height: 48px;
    margin: 0;
  }
  body {
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    font-weight: 300;
    font-family: "Exo", sans-serif;
    color: ${colors.default};
  }
  a {
    font-family: "Exo", sans-serif;
    font-weight: 300;
    text-decoration: none;
    display: inline-block;
    color: ${colors.default};
    transition: all 0.2s ease-out;
  }
`;

export default GlobalStyle;
