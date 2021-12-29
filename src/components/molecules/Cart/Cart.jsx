import React from "react";

import Button from "../../atoms/Button/Button";
import Heading from "../../atoms/Heading/Heading";
import FlexContainer from "../../atoms/FlexContainer/FlexContainer";

import LessThanIcon from "../../../icons/LessThanIcon";
import GreaterThanIcon from "../../../icons/GreaterThanIcon";

import * as S from "./Cart.styles";

class Cart extends React.Component {
  render() {
    return (
      <FlexContainer direction="column" styleProps="text-align: left">
        <Heading color="primary" size="2.28rem" weight="700">
          Cart
        </Heading>
        <FlexContainer width="100%" direction="column" margin="4rem 0 0 0">
          <S.Wrapper margin="1rem 0" styleProps="max-height: 224px">
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
            <FlexContainer width="50%" justify="flex-end" align="center">
              <FlexContainer
                align="center"
                direction="column"
                justify="space-between"
              >
                <Button
                  width="45px"
                  height="45px"
                  fontSize="2rem"
                  fontWeight="400"
                  btnStyle="primary"
                  onClick={() => console.log("Hello")}
                >
                  +
                </Button>
                <Heading color="primary" size="1.71rem" weight="500">
                  1
                </Heading>
                <Button
                  width="45px"
                  height="45px"
                  fontSize="2rem"
                  fontWeight="400"
                  btnStyle="primary"
                  onClick={() => console.log("Hello")}
                >
                  -
                </Button>
              </FlexContainer>
              <FlexContainer margin="0 0 0 1rem" height="100%">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
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
                  <S.Img
                    alt="ProductOne"
                    src="https://i.zst.com.br/thumbs/12/3e/2f/1340384387.jpg"
                  />
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
                </div>
              </FlexContainer>
            </FlexContainer>
          </S.Wrapper>
        </FlexContainer>
      </FlexContainer>
    );
  }
}

export default Cart;
