import React from "react";
import { Routes, Route } from "react-router-dom";

import Cart from "../../molecules/Cart/Cart";
import CartPage from "../../../views/pages/CartPage/CartPage";
import ProductPage from "../../../views/pages/ProductPage/ProductPage";
import CategoryPage from "../../../views/pages/CategoryPage/CategoryPage";

import * as S from "./Content.styles";

class Content extends React.Component {
  render() {
    return (
      <S.Main>
        <Cart type="cartOverlay" isShowing={false} />
        <S.BackgroundWall modalActive={false} />
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
