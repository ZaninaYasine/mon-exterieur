/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styled";
import {
  Header,
  Banner,
  MasterContainer,
  Footer,
  Configuration,
  Work,
  Galery,
  Stores,
} from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Header />
        <Banner />
        <MasterContainer>
          <Configuration />
          <Work />
          <Galery />
          <Stores />
        </MasterContainer>
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
