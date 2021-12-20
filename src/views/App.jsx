import React from "react";

import Header from "../components/molecules/Header/Header";

import * as S from "./App.styles";

class App extends React.Component {
  render() {
    return (
      <S.App>
        <Header />
      </S.App>
    );
  }
}

export default App;
