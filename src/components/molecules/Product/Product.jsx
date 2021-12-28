import React from "react";

import Button from "../../atoms/Button/Button";
import FlexContainer from "../../atoms/FlexContainer/FlexContainer";

import * as S from "./Product.styles";

class Product extends React.Component {
  render() {
    return (
      <FlexContainer
        wrap="wrap"
        width="100%"
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
          <FlexContainer width="70%" direction="column">
            <FlexContainer width="100%" direction="column" align="flex-start">
              <S.Title weight="600">Apollo</S.Title>
              <S.Title weight="400">Running Short</S.Title>
            </FlexContainer>
            <FlexContainer styleProps="margin-top: 3.07rem;">
              <S.Title weight="700" size="1.29rem">
                Size:
              </S.Title>
            </FlexContainer>
            <FlexContainer width="100%" justify="space-between">
              <Button
                width="63px"
                height="45px"
                type="button"
                disabled={false}
                btnStyle="primary"
                onClick={() => console.log("Hello")}
              >
                XS
              </Button>
              <Button
                width="63px"
                height="45px"
                type="button"
                disabled={false}
                btnStyle="primary"
                onClick={() => console.log("Hello")}
              >
                S
              </Button>
              <Button
                width="63px"
                height="45px"
                type="button"
                disabled={false}
                btnStyle="primary"
                onClick={() => console.log("Hello")}
              >
                M
              </Button>
              <Button
                width="63px"
                height="45px"
                type="button"
                disabled={false}
                btnStyle="primary"
                onClick={() => console.log("Hello")}
              >
                L
              </Button>
            </FlexContainer>
            <FlexContainer
              width="100%"
              direction="column"
              align="flex-start"
              styleProps="margin-top: 2.85rem;"
            >
              <S.Title weight="700" size="1.29rem">
                Price:
              </S.Title>
              <S.Title weight="700" size="1.7rem">
                $50.00
              </S.Title>
            </FlexContainer>
            <FlexContainer
              width="100%"
              direction="column"
              justify="space-between"
              styleProps="margin-top: 1.43rem;"
            >
              <Button
                width="100%"
                fontWeight="600"
                fontSize="1.15rem"
                btnStyle="tertiary"
              >
                ADD TO CART
              </Button>
              <S.Paragraph>
                Find stunning women's cocktail dresses and party dresses. Stand
                out in lace and metallic cocktail dresses and party dresses from
                all your favorite brands.
              </S.Paragraph>
            </FlexContainer>
          </FlexContainer>
        </S.ProductDetailsContainer>
      </FlexContainer>
    );
  }
}

export default Product;
