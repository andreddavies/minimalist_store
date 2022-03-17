import React from "react";
import { connect } from "react-redux";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import FlexContainer from "../FlexContainer/FlexContainer";

import getCartTotalPrice from "../../../plugins/getCartTotalPrice";

import * as S from "./CartFooter.styles";

class CartFooter extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { cart, cartOverlay, setCartOverlay } = this.props;

    return (
      <S.CartFooterContainer
        isCartOverlay={cartOverlay}
        cartLength={cart.products.length}
      >
        <FlexContainer
          width="100%"
          align="center"
          margin="0.75rem 0"
          justify="space-between"
          tabletMinScreen={`
            justify-content: flex-end;
          `}
        >
          <Heading size="1.15rem" weight="500" color="primary">
            Total
          </Heading>
          <Heading
            size="1.15rem"
            weight="700"
            color="primary"
            margin="0 0 0 1rem"
          >
            {getCartTotalPrice()}
          </Heading>
        </FlexContainer>
        <FlexContainer
          width="100%"
          align="center"
          justify="space-between"
          tabletMinScreen={`
            ${!cartOverlay && "justify-content: flex-end"};
          `}
        >
          <Button
            width="40%"
            type="button"
            height="43px"
            fontSize="1rem"
            fontWeight="600"
            btnStyle="primary"
            styleProps={`
              ${!cartOverlay && "display: none"}
            `}
          >
            <S.StyledLink to="/cart" onClick={() => setCartOverlay(false)}>
              VIEW BAG
            </S.StyledLink>
          </Button>
          <Button
            width="40%"
            type="button"
            height="43px"
            fontSize="1rem"
            fontWeight="600"
            btnStyle="tertiary"
            tabletMinScreen={`
              width: 130px;
            `}
          >
            <S.StyledLink
              to="/successfulPurchase"
              style={{
                width: "100%",
                height: "100%",
                color: "inherit",
                textDecoration: "none",
              }}
              onClick={() => setCartOverlay(false)}
            >
              CHECK OUT
            </S.StyledLink>
          </Button>
        </FlexContainer>
      </S.CartFooterContainer>
    );
  }
}

const mapState = (state) => ({
  cart: state.store.cart,
});

const mapDispatch = (dispatch) => ({
  setCartOverlay: dispatch.store.setCartOverlay,
});

export default connect(mapState, mapDispatch)(CartFooter);
