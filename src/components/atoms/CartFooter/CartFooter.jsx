import React, { Component } from "react";
import { connect } from "react-redux";

import Heading from "../Heading/Heading";

import { price } from "../../../plugins/masks";
import withRouter from "../../../hocs/withRouter";

import * as S from "./CartFooter.styles";

class CartFooter extends Component {
  render() {
    const { cart, currency, navigate, cartOverlay, setCartOverlay } =
      this.props;

    return (
      <S.CartFooterContainer
        isCartOverlay={cartOverlay}
        cartLength={cart.products.length}
      >
        <S.CenterContainer>
          <S.PriceWrapper width="100%" align="center" justify="space-between">
            <Heading size="1.15rem" weight="500" color="primary">
              Total
            </Heading>
            <Heading
              weight="700"
              size="1.15rem"
              color="primary"
              margin="0 0 0 1rem"
            >
              {(cart.products.length > 0 &&
                price(cart.totalPrice)[currency.label]()) ||
                0}
            </Heading>
          </S.PriceWrapper>
          <S.ButtonWrapper
            width="100%"
            align="center"
            justify="space-between"
            cartOverlay={cartOverlay}
          >
            <S.ViewBagButton
              width="40%"
              type="button"
              fontSize="1rem"
              fontWeight="600"
              btnStyle="primary"
              cartOverlay={cartOverlay}
              onClick={() => {
                setCartOverlay(false);
                navigate("/cart");
              }}
            >
              VIEW BAG
            </S.ViewBagButton>
            <S.CheckoutButton
              width="40%"
              type="button"
              fontSize="1rem"
              fontWeight="600"
              btnStyle="tertiary"
              onClick={() => {
                setCartOverlay(false);
                navigate("/successfulPurchase");
              }}
            >
              CHECK OUT
            </S.CheckoutButton>
          </S.ButtonWrapper>
        </S.CenterContainer>
      </S.CartFooterContainer>
    );
  }
}

const mapState = (state) => ({
  cart: state.store.cart,
  currency: state.store.currency,
});

const mapDispatch = (dispatch) => ({
  setCartOverlay: dispatch.store.setCartOverlay,
});

export default withRouter(connect(mapState, mapDispatch)(CartFooter));
