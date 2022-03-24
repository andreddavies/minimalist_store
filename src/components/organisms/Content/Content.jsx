import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Alert from "../../atoms/Alert/Alert";
import Cart from "../../molecules/Cart/Cart";
import CartPage from "../../../views/pages/CartPage/CartPage";
import ProductPage from "../../../views/pages/ProductPage/ProductPage";
import CategoryPage from "../../../views/pages/CategoryPage/CategoryPage";
import SuccessfulPurchase from "../../../views/pages/SuccessfulPurchase/SuccessfulPurchase";

import * as S from "./Content.styles";

class Content extends React.Component {
  render() {
    const { cartOverlay, setCartOverlay } = this.props;

    return (
      <S.Main>
        <Alert />
        <Cart type="cartOverlay" isShowing={cartOverlay} />
        <S.BackgroundWall
          modalActive={cartOverlay}
          onClick={() => setCartOverlay(false)}
        />
        <Routes>
          <Route exact path="/" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/successfulPurchase" element={<SuccessfulPurchase />} />
        </Routes>
      </S.Main>
    );
  }
}

const mapState = (state) => ({
  cartOverlay: state.store.cartOverlay,
});

const mapDispatch = (dispatch) => ({
  setCartOverlay: dispatch.store.setCartOverlay,
});

export default connect(mapState, mapDispatch)(Content);
