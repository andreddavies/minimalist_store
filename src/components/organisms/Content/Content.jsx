import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Cart from "../../molecules/Cart/Cart";
import CartPage from "../../../views/pages/CartPage/CartPage";
import ProductPage from "../../../views/pages/ProductPage/ProductPage";
import CategoryPage from "../../../views/pages/CategoryPage/CategoryPage";

import { store } from "../../../store";

import * as S from "./Content.styles";

class Content extends React.Component {
  render() {
    const rootState = store.getState().store;

    return (
      <S.Main>
        <Cart type="cartOverlay" isShowing={rootState.cartOverlay} />
        <S.BackgroundWall modalActive={rootState.cartOverlay} />
        <Routes>
          <Route exact path="/" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </S.Main>
    );
  }
}

const mapState = (state) => ({
  store: state.store,
});

export default connect(mapState, null)(Content);
