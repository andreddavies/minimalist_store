import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Heading from "../../atoms/Heading/Heading";
import CartIcon from "../../../icons/AddToCartIcon";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import FlexContainer from "../../atoms/FlexContainer/FlexContainer";

import * as S from "./ProductCard.styles";

class ProductCard extends React.Component {
  render() {
    const { cart, product, currency, setCart, setProductQuantity } = this.props;

    const handleAddToCart = () => {
      const productData = {
        id: product.id,
        name: product.name,
        brand: product.brand,
        prices: product.prices,
        inStock: product.inStock,
        gallery: product.gallery,
        attributes: product.attributes,
        selectedAttributes: handleAttributes(),
      };

      const equalProduct = cart.products.find((element) => {
        return (
          element.id === productData.id &&
          element.selectedAttributes.text.join(
            element.selectedAttributes.swatch
          ) ===
            productData.selectedAttributes.text.join(
              productData.selectedAttributes.swatch
            )
        );
      });
      if (equalProduct !== undefined) {
        setProductQuantity({
          operation: "increment",
          id: productData.id,
          selectedAttributes: productData.selectedAttributes,
        });
      } else setCart({ ...productData, quantity: 1 });
    };

    const handleAttributes = () => {
      const attributes = { text: {}, swatch: {} };

      product.attributes.map((attribute) => {
        return (attributes[attribute.type] = {
          [attribute.name]: attribute.items[0].displayValue,
        });
      });

      return attributes;
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

                  handleAddToCart();
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
                  {currency.symbol}
                  {
                    product.prices.find(
                      (el) => el.currency.label === currency.label
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
  cart: state.store.cart,
  currency: state.store.currency,
});

const mapDispatch = (dispatch) => ({
  setCart: dispatch.store.setCart,
  setProductQuantity: dispatch.store.setProductQuantity,
});

export default connect(mapState, mapDispatch)(ProductCard);
