import styled from "styled-components";

import { Button } from "../../atoms/Button/Button.styles";
import { Container as HeadingContainer } from "../../atoms/Heading/Heading.styles";
import { Container as FlexContainer } from "../FlexContainer/FlexContainer.styles";

const ContentWrapper = styled(FlexContainer)`
  padding-top: 8px;
`;

const CartNameWrapper = styled(FlexContainer)`
  margin: 3rem 0;
`;

const Wrapper = styled(FlexContainer)`
  margin: 1rem 0 0 0;
  border-top: 1px solid #e5e5e5;
`;

const AttributeButton = styled(Button)`
  width: 63px;
  height: 45px;
  margin-right: 10px;
  border: ${({ active }) => active && "4px solid #d3d3d3"};
`;

const SwatchFiller = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ backgroundColor }) => backgroundColor};
`;

const ProductTitle = styled(HeadingContainer)`
  font-size: 2.15rem;
  font-weight: ${({ productName }) => (productName && 400) || 600};
  margin: ${({ productName }) => (productName && 0) || "0.85rem 0 0 0"};
`;

const ProductPrice = styled(HeadingContainer)`
  font-weight: 700;
  font-size: 1.72rem;
  margin: 0.85rem 0 0 0;
`;

const CounterWrapper = styled(FlexContainer)`
  height: 185px;
`;

const ImageWrapper = styled(FlexContainer)`
  width: 141px;
  height: 185px;
  margin: 0 0 0 2rem;
`;

const ArrowButton = styled.button`
  outline: 0;
  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
  position: relative;
  background: transparent;
`;

const Img = styled.img`
  width: 100%;
  height: 185px;
  max-width: 141px;
`;

export {
  Img,
  Wrapper,
  ArrowButton,
  ProductTitle,
  ProductPrice,
  SwatchFiller,
  ImageWrapper,
  ContentWrapper,
  CounterWrapper,
  CartNameWrapper,
  AttributeButton,
};
