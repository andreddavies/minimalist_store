import React from "react";
import { connect } from "react-redux";

import CartFooter from "../../atoms/CartFooter/CartFooter";
import CartOnPage from "../../atoms/CartOnPage/CartOnPage";
import CartOverlay from "../../atoms/CartOverlay/CartOverlay";

import { store } from "../../../store";

import * as S from "./Cart.styles";

class Cart extends React.Component {
  render() {
    const rootState = store.getState().store;

    return (
      <S.CartContainer isShowing={this.props.isShowing}>
        {(this.props.type === "cartOverlay" && (
          <CartOverlay>
            <CartFooter cartOverlay />
          </CartOverlay>
        )) || (
          <CartOnPage>
            <CartFooter
              setToBottom={`
                bottom: 0;
                width: 90%;
                position: ${rootState.cart.products.length === 0 && "fixed"};
              `}
            />
          </CartOnPage>
        )}
      </S.CartContainer>
    );
  }
}

const mapState = (state) => ({
  store: state.store,
});

export default connect(mapState, null)(Cart);
