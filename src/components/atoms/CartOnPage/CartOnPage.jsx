import React from "react";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import FlexContainer from "../FlexContainer/FlexContainer";

import LessThanIcon from "../../../icons/LessThanIcon";
import GreaterThanIcon from "../../../icons/GreaterThanIcon";

import * as S from "./CartOnPage.styles";

class CartOnPage extends React.Component {
  render() {
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
            <S.Wrapper width="100%" direction="column" margin="1rem 0 0 0">
              <FlexContainer
                margin="1rem 0"
                tabletMinScreen={`
                  height: 185px;
              `}
              >
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
                    Apollo
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
                    Running Short
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
                    $50.00
                  </Heading>
                  <FlexContainer width="100%" align="center">
                    <FlexContainer margin="0" justify="flex-start">
                      <Button
                        width="24px"
                        height="24px"
                        fontSize="1rem"
                        fontWeight="400"
                        btnStyle="primary"
                        tabletMinScreen={`
                          width: 63px;
                          height: 45px;
                          font-size: 1.15rem;
                        `}
                      >
                        S
                      </Button>
                      <Button
                        width="24px"
                        height="24px"
                        fontSize="1rem"
                        fontWeight="400"
                        margin="0 0.6rem"
                        btnStyle="primary"
                        tabletMinScreen={`
                          width: 63px;
                          height: 45px;
                          font-size: 1.15rem;
                        `}
                      >
                        M
                      </Button>
                    </FlexContainer>
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
                      onClick={() => console.log("Hello")}
                    >
                      +
                    </Button>
                    <Heading color="primary" size="1.15rem" weight="500">
                      1
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
                      onClick={() => console.log("Hello")}
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
                    </FlexContainer>
                  </FlexContainer>
                </FlexContainer>
              </FlexContainer>
            </S.Wrapper>
          </FlexContainer>
          {this.props.children}
        </FlexContainer>
      </FlexContainer>
    );
  }
}

export default CartOnPage;
