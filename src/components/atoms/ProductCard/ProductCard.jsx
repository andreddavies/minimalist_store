import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Heading from "../../atoms/Heading/Heading";
import CartIcon from "../../../icons/AddToCartIcon";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import FlexContainer from "../../atoms/FlexContainer/FlexContainer";

import { store } from "../../../store";

import * as S from "./ProductCard.styles";

class ProductCard extends React.Component {
  render() {
    const { dispatch } = store;
    const rootState = store.getState().store;

    const { product } = this.props;

    const handleAddToCart = (payload) => {
      const dataToDispatch = {
        product: {
          id: payload.id,
          name: payload.name,
          brand: payload.brand,
          prices: payload.prices,
          inStock: payload.inStock,
          gallery: payload.gallery,
          attributes: payload.attributes,
          selectedAttributes: payload.selectedAttributes,
        },
      };
      const product = rootState.cart.products.find((product) => {
        return (
          product.id === payload.id &&
          product.selectedAttributes === payload.selectedAttributes
        );
      });

      if (product !== undefined) {
        dispatch.store.setProductQuantity({
          operation: "increment",
          id: dataToDispatch.product.id,
          selectedAttributes: dataToDispatch.product.selectedAttributes,
        });
      } else dispatch.store.setCart({ ...dataToDispatch, quantity: 1 });
    };

    return (
      <S.ProductItem>
        <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
          <FlexContainer
            width="100%"
            direction="column"
            styleProps="padding: 16px"
          >
            <S.ImageWrapper inStock={product.inStock}>
              {!product.inStock && (
                <S.ImageOverflow>
                  <Heading margin="0" size="24px" weight="400" color="tertiary">
                    OUT OF STOCK
                  </Heading>
                </S.ImageOverflow>
              )}
              <img alt={product.name} src={product.gallery[0]} />
              <S.IconWrapper
                onClick={(e) => {
                  e.preventDefault();

                  handleAddToCart({
                    ...product,
                    selectedAttributes: { text: null, swatch: null },
                  });
                }}
              >
                <CartIcon width={52} height={52} />
              </S.IconWrapper>
            </S.ImageWrapper>
            <S.ProductInfoWrapper>
              <Heading color="primary" size="18px" weight="300">
                {`${product.brand}
                      ${product.name}`}
              </Heading>
              <S.PriceWrapper inStock={product.inStock}>
                <Paragraph color="secondary" size="18px" weight="500">
                  {rootState.currency.symbol}
                  {
                    product.prices.find(
                      (el) => el.currency.label === rootState.currency.label
                    ).amount
                  }
                </Paragraph>
              </S.PriceWrapper>
            </S.ProductInfoWrapper>
          </FlexContainer>
        </Link>
      </S.ProductItem>
    );
  }
}

const mapState = (state) => ({
  store: state.store,
});

const mapDispatch = (dispatch) => ({
  setCart: dispatch.store.setCart,
});

export default connect(mapState, mapDispatch)(ProductCard);
