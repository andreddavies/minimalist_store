import React from "react";
import { Routes, Route } from "react-router-dom";

import CartPage from "../../../views/pages/CartPage";
import ProductPage from "../../../views/pages/ProductPage";
import CategoryPage from "../../../views/pages/CategoryPage";

import * as S from "./Content.styles";

class Content extends React.Component {
  render() {
    return (
      <S.Main>
        <Routes>
          <Route exact path="/" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </S.Main>
    );
  }
}

export default Content;
