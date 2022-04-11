import React from "react";
import { connect } from "react-redux";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import FlexContainer from "../FlexContainer/FlexContainer";

import LessThanIcon from "../../../icons/LessThanIcon";
import GreaterThanIcon from "../../../icons/GreaterThanIcon";

import { price } from "../../../plugins/masks";

import * as S from "./CartOnPage.styles";

class CartOnPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attributes: {},
    };
  }

  render() {
    const {
      cart,
      children,
      currency,
      setAttributes,
      setCurrentImage,
      setProductQuantity,
    } = this.props;

    const productPrice = (product) =>
      price(
        product.prices.find((el) => {
          return el.currency.label === currency.label;
        }).amount
      )[currency.label]();

    const handleSelectedAttributes = (product, variation, item) => {
      setAttributes({
        id: product.id,
        newAttributes: {
          ...product.selectedAttributes,
          [variation.type]: {
            [variation.name]: item.displayValue,
          },
        },
        oldAttributes: product.selectedAttributes,
      });
    };

    return (
      <FlexContainer width="100%" justify="center">
        <S.CartOnPageWrapper width="90%" align="center" column>
          <S.ContentWrapper column width="100%">
            <S.CartNameWrapper>
              <Heading color="primary" size="2.3rem" weight="700">
                Cart
              </Heading>
            </S.CartNameWrapper>
            {cart.products.length === 0 && (
              <FlexContainer width="100%" justify="center">
                <Heading color="primary" size="3rem" weight="400">
                  Cart is empty!
                </Heading>
              </FlexContainer>
            )}
            {cart.products.map((product, index) => (
              <S.Wrapper key={index} width="100%" column>
                <FlexContainer>
                  <FlexContainer
                    column
                    width="50%"
                    justify="center"
                    align="flex-start"
                  >
                    <S.ProductTitle weight="300" size="1.15rem">
                      {product.brand}
                    </S.ProductTitle>
                    <S.ProductTitle productName weight="300" size="1.15rem">
                      {product.name}
                    </S.ProductTitle>
                    <Heading weight="500" size="1.15rem">
                      {productPrice(product)}
                    </Heading>
                    <FlexContainer column width="100%" align="flex-start">
                      {product.attributes.map((variation, index) => (
                        <FlexContainer
                          width="65%"
                          key={index}
                          margin="1rem 0"
                          justify="flex-start"
                        >
                          {variation.items.map((item, index) => (
                            <S.AttributeButton
                              key={index}
                              type="button"
                              btnStyle={
                                (product.selectedAttributes[variation.type][
                                  variation.name
                                ] === item.displayValue &&
                                  "secondary") ||
                                "primary"
                              }
                              active={
                                variation.type === "swatch" &&
                                product.selectedAttributes[variation.type][
                                  variation.name
                                ] === item.displayValue
                              }
                              onClick={() => {
                                handleSelectedAttributes(
                                  product,
                                  variation,
                                  item
                                );
                              }}
                            >
                              {(variation.type === "swatch" && (
                                <S.SwatchFiller
                                  backgroundColor={item.displayValue}
                                />
                              )) ||
                                item.displayValue}
                            </S.AttributeButton>
                          ))}
                        </FlexContainer>
                      ))}
                    </FlexContainer>
                  </FlexContainer>
                  <FlexContainer width="50%" align="center" justify="flex-end">
                    <S.CounterWrapper
                      column
                      width="auto"
                      align="center"
                      justify="space-between"
                    >
                      <Button
                        width="45px"
                        height="45px"
                        fontWeight="400"
                        fontSize="1.5rem"
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
                        width="45px"
                        height="45px"
                        fontWeight="400"
                        fontSize="1.5rem"
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
                    <S.ImageWrapper>
                      <FlexContainer align="center" justify="center">
                        <S.ArrowButton
                          type="button"
                          onClick={() => {
                            setCurrentImage({
                              id: product.id,
                              action: "decrement",
                              selectedAttributes: product.selectedAttributes,
                            });
                          }}
                        >
                          <LessThanIcon width={24} height={24} />
                        </S.ArrowButton>
                        <S.Img
                          alt="ProductOne"
                          src={product.gallery[product.currentImage]}
                        />
                        <S.ArrowButton
                          type="button"
                          onClick={() => {
                            setCurrentImage({
                              id: product.id,
                              action: "increment",
                              selectedAttributes: product.selectedAttributes,
                            });
                          }}
                        >
                          <GreaterThanIcon width={24} height={24} />
                        </S.ArrowButton>
                      </FlexContainer>
                    </S.ImageWrapper>
                  </FlexContainer>
                </FlexContainer>
              </S.Wrapper>
            ))}
          </S.ContentWrapper>
          {children}
        </S.CartOnPageWrapper>
      </FlexContainer>
    );
  }
}

const mapState = (state) => ({
  cart: state.store.cart,
  currency: state.store.currency,
});

const mapDispatch = (dispatch) => ({
  setAttributes: dispatch.store.setAttributes,
  setCurrentImage: dispatch.store.setCurrentImage,
  setProductQuantity: dispatch.store.setProductQuantity,
});

export default connect(mapState, mapDispatch)(CartOnPage);
