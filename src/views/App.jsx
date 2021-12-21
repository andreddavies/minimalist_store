import React from "react";
import { ThemeDefault } from "../styles/theme";
import { ThemeProvider } from "styled-components";

import Header from "../components/molecules/Header/Header";

import * as S from "./App.styles";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={ThemeDefault}>
        <S.App>
          <Header />
        </S.App>
      </ThemeProvider>
    );
  }
}

export default App;
