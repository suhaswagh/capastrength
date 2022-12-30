import { useEffect } from "react";

import "./App.css";

import AppRoute from "./route";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global.styles";

import { useLocation } from "react-router-dom";

import { colors, font } from "./styles/variables";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const theme = {
    colors,
    font,
  };

  console.log({ theme });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoute />
      </ThemeProvider>
    </div>
  );
}

export default App;
