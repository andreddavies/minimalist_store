import React from "react";
import { ThemeDefault } from "../styles/theme";
import { ThemeProvider } from "styled-components";

import Header from "../components/molecules/Header/Header";
import ProductList from "../components/molecules/ProductList/ProductList";

import * as S from "./App.styles";

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={ThemeDefault}>
        <S.App>
          <Header />
          <ProductList
            products={[
              { title: "Product One", description: "This is product one" },
              { title: "Product Two", description: "This is product two" },
              { title: "Product Three", description: "This is product three" },
              { title: "Product Four", description: "This is product four" },
            ]}
          />
        </S.App>
      </ThemeProvider>
    );
  }
}

export default App;
