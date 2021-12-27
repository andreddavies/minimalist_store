import React from "react";

import FlexContainer from "../../atoms/FlexContainer/FlexContainer";

import * as S from "./Product.styles";

class Product extends React.Component {
  render() {
    return (
      <FlexContainer>
        <S.Title>Product Details Page</S.Title>
      </FlexContainer>
    );
  }
}

export default Product;
