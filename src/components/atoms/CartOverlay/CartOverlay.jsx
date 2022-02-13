import React from "react";
import { connect } from "react-redux";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import FlexContainer from "../FlexContainer/FlexContainer";

import { store } from "../../../store";
import { price } from "../../../plugins/masks";

import * as S from "./CartOverlay.styles";

class CartOverlay extends React.Component {
  render() {
    const { dispatch } = store;
    const rootState = store.getState().store;

    const getProductPrice = (product) => {
      const prices = () => {
        if (product.quantity > 1) {
          return (
            product.prices.find((price) => {
              return price.currency.label === rootState.currency.label;
            }).amount * product.quantity
          );
        }
        return product.prices.find((price) => {
          return price.currency.label === rootState.currency.label;
        }).amount;
      };
      const totalPrice = prices();

      return price(totalPrice)[rootState.currency.label]();
    };

    return (
      <FlexContainer
        width="100%"
        justify="center"
        styleProps={`
            right: 0;
            top: 64px;
            z-index: 999;
            background: #fff;
            position: absolute;
            height: ${rootState.cart.products.length > 0 && "70%"};
            overflow-y: ${rootState.cart.products.length > 0 && "scroll"};
        `}
        tabletMinScreen={`
            right: 200px;
            max-width: 325px;
            max-height: 540px;
        `}
      >
        <FlexContainer margin="0" width="90%" align="center" direction="column">
          <FlexContainer
            margin="0"
            width="100%"
            direction="column"
            styleProps="text-align: left"
          >
            <FlexContainer margin="0">
              <Heading color="primary" size="1.15rem" weight="700">
                My Bag,
              </Heading>
              <Heading
                weight="500"
                size="1.15rem"
                color="primary"
                margin="1rem 0.5rem"
              >
                {`${rootState.cart.quantity} items`}
              </Heading>
            </FlexContainer>
            {rootState.cart.products !== undefined &&
              rootState.cart.products.map((product, index) => {
                return (
                  <FlexContainer
                    key={index}
                    width="100%"
                    direction="column"
                    margin="1rem 0 0 0"
                  >
                    <FlexContainer
                      margin="1rem 0"
                      tabletMinScreen={`
                        height: 137px;
                      `}
                    >
                      <FlexContainer
                        width="50%"
                        justify="center"
                        align="flex-start"
                        direction="column"
                      >
                        <Heading
                          margin="0.85rem 0 0 0"
                          size="1.15rem"
                          weight="300"
                        >
                          {product.brand} <br />
                          {product.name} <br />
                        </Heading>
                        <Heading
                          margin="0.85rem 0 0 0"
                          size="1.15rem"
                          weight="500"
                        >
                          {getProductPrice(product)}
                        </Heading>
                        <FlexContainer width="100%" align="center">
                          <FlexContainer margin="0" justify="flex-start">
                            <Button
                              width="24px"
                              height="24px"
                              fontSize="1rem"
                              fontWeight="400"
                              btnStyle="primary"
                            >
                              S
                            </Button>
                            <Button
                              width="24px"
                              height="24px"
                              margin="0 0.6rem"
                              fontSize="1rem"
                              fontWeight="400"
                              btnStyle="primary"
                            >
                              M
                            </Button>
                          </FlexContainer>
                        </FlexContainer>
                      </FlexContainer>
                      <FlexContainer
                        width="50%"
                        align="center"
                        justify="flex-end"
                      >
                        <FlexContainer
                          width="auto"
                          align="center"
                          direction="column"
                          justify="space-between"
                          styleProps={`height: 137px;`}
                        >
                          <Button
                            width="24px"
                            height="24px"
                            fontSize="1rem"
                            fontWeight="400"
                            btnStyle="primary"
                            onClick={() => {
                              dispatch.store.setProductQuantity({
                                id: product.id,
                                operation: "increment",
                                selectedAttributes: product.selectedAttributes,
                              });
                            }}
                          >
                            +
                          </Button>
                          <Heading color="primary" size="1.15rem" weight="500">
                            {product.quantity}
                          </Heading>
                          <Button
                            width="24px"
                            height="24px"
                            fontSize="1rem"
                            fontWeight="400"
                            btnStyle="primary"
                            onClick={() => {
                              dispatch.store.setProductQuantity({
                                id: product.id,
                                operation: "decrement",
                                selectedAttributes: product.selectedAttributes,
                              });
                            }}
                          >
                            -
                          </Button>
                        </FlexContainer>
                        <FlexContainer
                          width="100%"
                          height="100%"
                          margin="0 0 0 1rem"
                        >
                          <S.Img
                            key={index}
                            alt="ProductOne"
                            src={product.gallery[0]}
                          />
                        </FlexContainer>
                      </FlexContainer>
                    </FlexContainer>
                  </FlexContainer>
                );
              })}
          </FlexContainer>
          {this.props.children}
        </FlexContainer>
      </FlexContainer>
    );
  }
}

const mapState = (state) => ({
  store: state.store,
});

const mapDispatch = (dispatch) => ({
  setCart: dispatch.store.setCart,
  setProductQuantity: dispatch.store.setProductQuantity,
});

export default connect(mapState, mapDispatch)(CartOverlay);
