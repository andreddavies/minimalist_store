import React from "react";

import CartFooter from "../../atoms/CartFooter/CartFooter";
import CartOnPage from "../../atoms/CartOnPage/CartOnPage";
import CartOverlay from "../../atoms/CartOverlay/CartOverlay";

import * as S from "./Cart.styles";

class Cart extends React.Component {
  render() {
    const { isShowing, type } = this.props;

    return (
      <S.CartContainer isShowing={isShowing}>
        {(type === "cartOverlay" && (
          <CartOverlay>
            <CartFooter cartOverlay />
          </CartOverlay>
        )) || (
          <CartOnPage>
            <CartFooter />
          </CartOnPage>
        )}
      </S.CartContainer>
    );
  }
}

export default Cart;
