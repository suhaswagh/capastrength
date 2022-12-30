import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  em,
  img,
  strong,
  form,
  table,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  section,
  footer,
  header,
  menu,
  nav {
    display: block;
  }

  input{
    box-sizing: border-box;
  }

  ${'' /* body {
    font-size: ${({ theme: { font } }) => font.main};
    line-height: 20px;
    -webkit-text-size-adjust: none;
    vertical-align: baseline;
    font-family: 'Roboto', sans-serif;
    font-display: block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: scroll;
    box-sizing: border-box;
    background-color: ${({ theme: { color } }) => color.pageBg};
    color: ${({ theme: { color } }) => color.dark};
  } */}

  ol,
  ul {
    list-style: none;
  }

  a, button {
    cursor: pointer;
  }

  a:link {
    text-decoration: none;
  }

  a{
    font-size: inherit;
    text-decoration: none;
    color: inherit
  }
  
  a:hover{
    color: inherit
  }

`;
