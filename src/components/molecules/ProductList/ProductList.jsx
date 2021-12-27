import React from "react";
import { Link } from "react-router-dom";

import CartIcon from "../../../icons/AddToCartIcon";
import FlexContainer from "../../atoms/FlexContainer/FlexContainer";

import * as S from "./ProductList.styles";

class ProductList extends React.Component {
  render() {
    const productId = "ps-5";

    return (
      <S.Container>
        <S.List>
          {this.props.products.map((element, index) => (
            <S.ListItem key={index}>
              <FlexContainer
                width="100%"
                direction="column"
                styleProps="padding: 16px"
              >
                <S.ImageWrapper inStock={element.inStock}>
                  <img
                    alt="ProductOne"
                    src="https://i.zst.com.br/thumbs/12/3e/2f/1340384387.jpg"
                  />
                  <S.IconWrapper onClick={() => console.log("Hello")}>
                    <Link to={`/product/${productId}`}>
                      <CartIcon width={52} height={52} />
                    </Link>
                  </S.IconWrapper>
                </S.ImageWrapper>
                <S.ProductInfoWrapper>
                  <S.Title inStock={element.inStock}>{element.title}</S.Title>
                  <S.PriceWrapper inStock={element.inStock}>
                    {element.currency}
                    {element.price}
                  </S.PriceWrapper>
                </S.ProductInfoWrapper>
              </FlexContainer>
            </S.ListItem>
          ))}
        </S.List>
      </S.Container>
    );
  }
}

export default ProductList;
