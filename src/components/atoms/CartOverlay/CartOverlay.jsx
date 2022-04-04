import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import FlexContainer from "../FlexContainer/FlexContainer";

import { price } from "../../../plugins/masks";

import * as S from "./CartOverlay.styles";

class CartOverlay extends Component {
  render() {
    const { cart, currency, children, products, setProductQuantity } =
      this.props;

    const productPrice = (product) =>
      price(
        product.prices.find((el) => {
          return el.currency.label === currency.label;
        }).amount
      )[currency.label]();

    return (
      <S.OverlayContainer
        width="100%"
        justify="center"
        cartEmpty={products.length === 0}
      >
        <FlexContainer width="90%" align="center" column>
          <S.ContentWrapper column width="100%">
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
                {`${cart.quantity} items`}
              </Heading>
            </FlexContainer>
            {products !== undefined &&
              products.map((product, index) => {
                return (
                  <FlexContainer
                    column
                    key={index}
                    width="100%"
                    margin="1rem 0 0 0"
                  >
                    <S.Card margin="1rem 0">
                      <FlexContainer
                        column
                        width="50%"
                        align="flex-start"
                        justify="space-between"
                      >
                        <Heading margin="0" weight="300" size="1.15rem">
                          {product.brand} <br />
                          {product.name} <br />
                        </Heading>
                        <Heading margin="0" weight="500" size="1.15rem">
                          {productPrice(product)}
                        </Heading>
                        <FlexContainer margin="0" width="100%" align="center">
                          {product.selectedAttributes.swatch &&
                            Object.keys(product.selectedAttributes.swatch).map(
                              (el, index) => (
                                <S.ShowAttributeContainer
                                  key={index}
                                  withMarginRight
                                >
                                  <S.SwatchFiller
                                    background={
                                      product.selectedAttributes.swatch[el]
                                    }
                                  />
                                </S.ShowAttributeContainer>
                              )
                            )}
                          {product.selectedAttributes.text &&
                            Object.keys(product.selectedAttributes.text).map(
                              (el, index) => (
                                <S.ShowAttributeContainer key={index}>
                                  {product.selectedAttributes.text[el]}
                                </S.ShowAttributeContainer>
                              )
                            )}
                        </FlexContainer>
                      </FlexContainer>
                      <FlexContainer
                        width="50%"
                        align="center"
                        justify="flex-end"
                      >
                        <S.CounterWrapper
                          column
                          width="auto"
                          align="center"
                          justify="space-between"
                        >
                          <Button
                            width="24px"
                            height="24px"
                            fontSize="1rem"
                            fontWeight="400"
                            btnStyle="primary"
                            onClick={() => {
                              setProductQuantity({
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
                              setProductQuantity({
                                id: product.id,
                                operation: "decrement",
                                selectedAttributes: product.selectedAttributes,
                              });
                            }}
                          >
                            -
                          </Button>
                        </S.CounterWrapper>
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
                    </S.Card>
                  </FlexContainer>
                );
              })}
          </S.ContentWrapper>
          {children}
        </FlexContainer>
      </S.OverlayContainer>
    );
  }
}

const mapState = (state) => ({
  cart: state.store.cart,
  currency: state.store.currency,
  products: state.store.cart.products,
});

const mapDispatch = (dispatch) => ({
  setProductQuantity: dispatch.store.setProductQuantity,
});

export default connect(mapState, mapDispatch)(CartOverlay);
