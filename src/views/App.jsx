import React from "react";
import { store } from "../store";
import { ThemeDefault } from "../styles/theme";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "../components/molecules/Header/Header";
import Content from "../components/organisms/Content/Content";

import { apiConfig } from "../services/apiConfig";

import * as S from "./App.styles";

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={apiConfig}>
        <ReduxProvider store={store}>
          <ThemeProvider theme={ThemeDefault}>
            <S.App>
              <Router>
                <Header />
                <Content />
              </Router>
            </S.App>
          </ThemeProvider>
        </ReduxProvider>
      </ApolloProvider>
    );
  }
}

export default App;
