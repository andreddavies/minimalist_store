import styled from "styled-components";

import { Container as FlexContainer } from "../FlexContainer/FlexContainer.styles";

const OverlayContainer = styled(FlexContainer)`
  top: 64px;
  right: 200px;
  z-index: 100;
  margin: 1rem 0;
  position: fixed;
  max-width: 325px;
  background: #fff;
  max-height: 540px;
  height: ${({ cartEmpty }) => !cartEmpty && "70%"};
  overflow-y: ${({ cartEmpty }) => !cartEmpty && "scroll"};

  ::-o-scrollbar {
    display: none;
  }
  ::-moz-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ShowAttributeContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  font-weight: 400;
  font-size: 0.8rem;
  margin-right: 10px;
  align-items: center;
  border: 1px solid #000;
  justify-content: center;
`;

const ContentWrapper = styled(FlexContainer)`
  text-align: left;
`;

const Card = styled(FlexContainer)`
  height: 137px;
`;

const CounterWrapper = styled(FlexContainer)`
  height: 137px;
`;

const Img = styled.img`
  width: 100%;
  height: 137px;
  max-width: 105px;
`;

const SwatchFiller = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ background }) => background};
`;

export {
  Img,
  Card,
  SwatchFiller,
  ContentWrapper,
  CounterWrapper,
  OverlayContainer,
  ShowAttributeContainer,
};
