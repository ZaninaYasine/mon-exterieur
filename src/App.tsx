/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";

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
  const store = createStore(reducers, applyMiddleware(thunk));

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
