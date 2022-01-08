import React from "react";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import FlexContainer from "../FlexContainer/FlexContainer";

import LessThanIcon from "../../../icons/LessThanIcon";
import GreaterThanIcon from "../../../icons/GreaterThanIcon";

import * as S from "./CartOverlay.styles";

class CartOverlay extends React.Component {
  render() {
    return (
      <FlexContainer
        width="100%"
        justify="center"
        styleProps={`
            right: 0;
            top: 64px;
            z-index: 999;
            background: #fff;
            position: absolute;
        `}
        tabletMinScreen={`
            right: 230px;
            max-width: 325px;
        `}
      >
        <FlexContainer margin="0" width="90%" align="center" direction="column">
          <FlexContainer
            margin="0"
            width="100%"
            direction="column"
            styleProps="text-align: left"
          >
            <FlexContainer margin="0">
              <Heading color="primary" size="1.15rem" weight="700">
                My Bag,
              </Heading>
              <Heading
                weight="500"
                size="1.15rem"
                color="primary"
                margin="1rem 0.5rem"
              >
                {`2 items`}
              </Heading>
            </FlexContainer>
            <FlexContainer width="100%" direction="column" margin="1rem 0 0 0">
              <FlexContainer
                margin="1rem 0"
                tabletMinScreen={`
                height: 137px;
              `}
              >
                <FlexContainer
                  width="50%"
                  justify="center"
                  align="flex-start"
                  direction="column"
                >
                  <Heading margin="0.85rem 0 0 0" size="1.15rem" weight="300">
                    Apollo <br />
                    Running Short <br />
                  </Heading>
                  <Heading margin="0.85rem 0 0 0" size="1.15rem" weight="500">
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
                      >
                        S
                      </Button>
                      <Button
                        width="24px"
                        height="24px"
                        margin="0 0.6rem"
                        fontSize="1rem"
                        fontWeight="400"
                        btnStyle="primary"
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
                  >
                    <Button
                      width="24px"
                      height="24px"
                      fontSize="1rem"
                      fontWeight="400"
                      btnStyle="primary"
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
                      onClick={() => console.log("Hello")}
                    >
                      -
                    </Button>
                  </FlexContainer>
                  <FlexContainer width="100%" margin="0 0 0 1rem" height="100%">
                    <FlexContainer width="100%" align="center" justify="center">
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
            </FlexContainer>
          </FlexContainer>
          {this.props.children}
        </FlexContainer>
      </FlexContainer>
    );
  }
}

export default CartOverlay;
