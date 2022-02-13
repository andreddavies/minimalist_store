import React from "react";
import { Link } from "react-router-dom";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import FlexContainer from "../FlexContainer/FlexContainer";

import { store } from "../../../store";
import getTotalPrice from "../../../plugins/getTotalPrice";

class CartFooter extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { dispatch } = store;

    return (
      <FlexContainer
        width="100%"
        direction="column"
        tabletMinScreen={this.props.setToBottom}
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
            {getTotalPrice()}
          </Heading>
        </FlexContainer>
        <FlexContainer
          width="100%"
          align="center"
          justify="space-between"
          tabletMinScreen={`
            ${!this.props.cartOverlay && "justify-content: flex-end"};
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
              ${!this.props.cartOverlay && "display: none"}
            `}
          >
            <Link
              to="/cart"
              style={{
                width: "100%",
                height: "100%",
                color: "inherit",
                textDecoration: "none",
              }}
              onClick={() => dispatch.store.setCartOverlay(false)}
            >
              VIEW BAG
            </Link>
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
            <Link
              to="/successfulPurchase"
              style={{
                width: "100%",
                height: "100%",
                color: "inherit",
                textDecoration: "none",
              }}
              onClick={() => dispatch.store.setCartOverlay(false)}
            >
              CHECK OUT
            </Link>
          </Button>
        </FlexContainer>
      </FlexContainer>
    );
  }
}

export default CartFooter;
