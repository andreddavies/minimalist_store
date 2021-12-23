import React from "react";
import { ThemeDefault } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import Content from "../components/organisms/Content/Content";

import * as S from "./App.styles";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={ThemeDefault}>
        <S.App>
          <Router>
            <Content />
          </Router>
        </S.App>
      </ThemeProvider>
    );
  }
}

export default App;
