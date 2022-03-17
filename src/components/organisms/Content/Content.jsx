import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Cart from "../../molecules/Cart/Cart";
import CartPage from "../../../views/pages/CartPage/CartPage";
import ProductPage from "../../../views/pages/ProductPage/ProductPage";
import CategoryPage from "../../../views/pages/CategoryPage/CategoryPage";

import * as S from "./Content.styles";

class Content extends React.Component {
  render() {
    const { cartOverlay } = this.props;

    return (
      <S.Main>
        <Cart type="cartOverlay" isShowing={cartOverlay} />
        <S.BackgroundWall modalActive={cartOverlay} />
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
  cartOverlay: state.store.cartOverlay,
});

export default connect(mapState, null)(Content);
