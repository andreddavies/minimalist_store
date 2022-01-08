import React from "react";

import CartFooter from "../../atoms/CartFooter/CartFooter";
import CartOnPage from "../../atoms/CartOnPage/CartOnPage";
import CartOverlay from "../../atoms/CartOverlay/CartOverlay";

import * as S from "./Cart.styles";

class Cart extends React.Component {
  render() {
    return (
      <S.CartContainer isShowing={this.props.isShowing}>
        {(this.props.type === "cartOverlay" && (
          <CartOverlay>
            <CartFooter />
          </CartOverlay>
        )) || (
          <CartOnPage>
            <CartFooter
              setToBottom={`
                bottom: 0;
                width: 90%;
                position: fixed;
              `}
            />
          </CartOnPage>
        )}
      </S.CartContainer>
    );
  }
}

export default Cart;
