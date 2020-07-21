import React from "react";
import { ModalProvider } from "styled-react-modal";

import "./config/ReactotronConfig";

import { Provider } from "react-redux";

import GlobalStyle from "./styles/GlobalStyles";

import Home from "./pages/Home";

import { store } from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <GlobalStyle />
        <Home />
      </ModalProvider>
    </Provider>
  );
}

export default App;
