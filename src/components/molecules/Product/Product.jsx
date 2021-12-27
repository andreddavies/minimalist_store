import React from "react";

import FlexContainer from "../../atoms/FlexContainer/FlexContainer";

import * as S from "./Product.styles";

class Product extends React.Component {
  render() {
    return (
      <FlexContainer
        width="100%"
        wrap="wrap"
        margin="5.7rem 0"
        justify="flex-start"
      >
        <S.GalleryContainer>
          <S.SmallImagesWrapper>
            <img
              alt="ProductOne"
              src="https://i.zst.com.br/thumbs/12/3e/2f/1340384387.jpg"
            />
            <img
              alt="ProductOne"
              src="https://i.zst.com.br/thumbs/12/3e/2f/1340384387.jpg"
            />
            <img
              alt="ProductOne"
              src="https://i.zst.com.br/thumbs/12/3e/2f/1340384387.jpg"
            />
          </S.SmallImagesWrapper>
          <S.ImageWrapper>
            <img
              alt="ProductOne"
              src="https://i.zst.com.br/thumbs/12/3e/2f/1340384387.jpg"
            />
          </S.ImageWrapper>
        </S.GalleryContainer>
        <S.ProductDetailsContainer>
          <FlexContainer direction="column" align="flex-start">
            <S.Title weight="600">Apollo</S.Title>
            <S.Title weight="400">Running Short</S.Title>
          </FlexContainer>
        </S.ProductDetailsContainer>
      </FlexContainer>
    );
  }
}

export default Product;
