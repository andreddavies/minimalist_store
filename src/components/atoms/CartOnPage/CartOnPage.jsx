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
  state = {
    attributes: {},
    attributeActive: null,
  };

  render() {
    const { cart, currency, children, setAttributes, setProductQuantity } =
      this.props;

    const productPrice = (product) =>
      price(
        product.prices.find((el) => {
          return el.currency.label === currency.label;
        }).amount
      )[currency.label]();

    const handleSelectedAttributes = (variation, item) => {
      const attributes = {
        text: { ...this.state.attributes.text },
        swatch: { ...this.state.attributes.swatch },
      };

      if (
        this.state.attributes[variation.type] &&
        this.state.attributes[variation.type][variation.name] !== undefined
      ) {
        attributes[variation.type] = {
          ...this.state.attributes[variation.type],
          [variation.name]: item.displayValue,
        };
      } else {
        attributes[variation.type] = {
          ...this.state.attributes[variation.type],
          [variation.name]: item.displayValue,
        };
      }

      this.setState({ attributes: { ...attributes } });
    };

    return (
      <FlexContainer width="100%" justify="center">
        <FlexContainer margin="0" width="90%" align="center" direction="column">
          <FlexContainer
            margin="0"
            width="100%"
            direction="column"
            styleProps="text-align: left"
          >
            <FlexContainer margin="0">
              <Heading color="primary" size="2.3rem" weight="700">
                Cart
              </Heading>
            </FlexContainer>
            {cart.products.length === 0 && (
              <FlexContainer margin="0" width="100%" justify="center">
                <Heading color="primary" size="3rem" weight="400">
                  Cart is empty!
                </Heading>
              </FlexContainer>
            )}
            {cart.products.map((product, index) => (
              <S.Wrapper
                key={index}
                width="100%"
                direction="column"
                margin="1rem 0 0 0"
              >
                <FlexContainer margin="0">
                  <FlexContainer
                    width="50%"
                    justify="center"
                    align="flex-start"
                    direction="column"
                  >
                    <Heading
                      weight="300"
                      size="1.15rem"
                      margin="0.85rem 0 0 0"
                      tabletMinScreen={`
                      font-weight: 600;
                      font-size: 2.15rem;
                    `}
                    >
                      {product.brand}
                    </Heading>
                    <Heading
                      margin="0"
                      weight="300"
                      size="1.15rem"
                      tabletMinScreen={`
                      font-weight: 400;
                      font-size: 2.15rem;
                    `}
                    >
                      {product.name}
                    </Heading>
                    <Heading
                      size="1.15rem"
                      weight="500"
                      margin="0.85rem 0 0 0"
                      tabletMinScreen={`
                      font-weight: 700;
                      font-size: 1.72rem;
                    `}
                    >
                      {productPrice(product)}
                    </Heading>
                    <FlexContainer
                      margin="0"
                      width="100%"
                      direction="column"
                      align="flex-start"
                    >
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
                              btnStyle={"primary"}
                              active={false}
                              onClick={() => {
                                handleSelectedAttributes(
                                  variation.type,
                                  item.displayValue
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
                    <FlexContainer
                      width="auto"
                      align="center"
                      direction="column"
                      justify="space-between"
                      styleProps={`height: 137px;`}
                      tabletMinScreen={`
                      height: 185px;
                    `}
                    >
                      <Button
                        width="24px"
                        height="24px"
                        fontSize="1rem"
                        fontWeight="400"
                        btnStyle="primary"
                        tabletMinScreen={`
                        width: 45px;
                        height: 45px;
                        font-size: 1.5rem;
                      `}
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
                        tabletMinScreen={`
                        width: 45px;
                        height: 45px;
                        font-size: 1.5rem;
                      `}
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
                    </FlexContainer>
                    <FlexContainer
                      margin="0 0 0 1rem"
                      tabletMinScreen={`
                      height: 185px;
                    `}
                    >
                      <FlexContainer align="center" justify="center">
                        <Button
                          width="24px"
                          height="24px"
                          type="button"
                          btnStyle="none"
                          styleProps="position: relative; left: 24px;"
                          onClick={() => console.log("Hello")}
                        >
                          <LessThanIcon width={24} height={24} />
                        </Button>
                        <S.Img alt="ProductOne" src={product.gallery[0]} />
                        <Button
                          width="24px"
                          height="24px"
                          type="button"
                          btnStyle="none"
                          styleProps="position: relative; right: 24px;"
                          onClick={() => console.log("Hello")}
                        >
                          <GreaterThanIcon width={24} height={24} />
                        </Button>
                      </FlexContainer>
                    </FlexContainer>
                  </FlexContainer>
                </FlexContainer>
              </S.Wrapper>
            ))}
          </FlexContainer>
          {children}
        </FlexContainer>
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
  setProductQuantity: dispatch.store.setProductQuantity,
});

export default connect(mapState, mapDispatch)(CartOnPage);
