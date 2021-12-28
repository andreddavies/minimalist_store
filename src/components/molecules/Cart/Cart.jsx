import React from "react";

import Button from "../../atoms/Button/Button";
import Heading from "../../atoms/Heading/Heading";
import FlexContainer from "../../atoms/FlexContainer/FlexContainer";

import * as S from "./Cart.styles";

class Cart extends React.Component {
  render() {
    return (
      <FlexContainer direction="column" styleProps="text-align: left">
        <Heading color="primary" size="2.28rem" weight="700">
          Cart
        </Heading>
        <FlexContainer width="100%" direction="column" margin="4rem 0 0 0">
          <S.Wrapper>
            <FlexContainer
              width="50%"
              justify="center"
              align="flex-start"
              direction="column"
            >
              <Heading margin="0.85rem 0 0 0" size="2.14rem" weight="600">
                Apollo
              </Heading>
              <Heading margin="0.85rem 0 0 0" size="2.14rem" weight="400">
                Running Short
              </Heading>
              <Heading margin="0.85rem 0 0 0" size="1.71rem" weight="700">
                $50.00
              </Heading>
              <FlexContainer width="100%" align="center" justify="flex-start">
                <S.Wrapper width="138px" justify="space-between">
                  <Button
                    width="63px"
                    height="45px"
                    fontWeight="400"
                    btnStyle="primary"
                    fontSize="1.14rem"
                  >
                    S
                  </Button>
                  <Button
                    width="63px"
                    height="45px"
                    fontWeight="400"
                    btnStyle="primary"
                    fontSize="1.14rem"
                  >
                    M
                  </Button>
                </S.Wrapper>
              </FlexContainer>
            </FlexContainer>
            <FlexContainer
              width="50%"
              justify="flex-end"
              align="center"
            ></FlexContainer>
          </S.Wrapper>
        </FlexContainer>
      </FlexContainer>
    );
  }
}

export default Cart;
