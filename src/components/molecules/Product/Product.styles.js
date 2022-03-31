import styled from "styled-components";

import { Button } from "../../atoms/Button/Button.styles";
import { Container as FlexContainer } from "../../atoms/FlexContainer/FlexContainer.styles";

const PageContainer = styled(FlexContainer)`
  margin: 5.7rem 0 0 0;
`;

const AttributeNameWrapper = styled(FlexContainer)`
  margin-top: 3.07rem;
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

const PriceWrapper = styled(FlexContainer)`
  margin-top: 2.85rem;
`;

const GalleryContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-start;
`;

const ImageWrapper = styled.div`
  width: 80%;
  display: flex;
  max-height: 511px;
  align-items: center;
  justify-content: center;

  & > img {
    width: auto;
    height: 100%;
    max-width: 100%;
    max-height: 511px;
    object-fit: contain;
  }
`;

const SmallImagesWrapper = styled.div`
  width: 12%;
  height: 100%;
  margin-top: 0;
  display: flex;
  overflow-x: auto;
  max-height: 511px;
  overflow-y: scroll;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  ::-o-scrollbar {
    display: none;
  }
  ::-moz-scrollbar {
    display: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }

  & > img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    max-height: 150px;
    margin-bottom: 20px;
    object-fit: contain;
    ${({ selected }) => selected && "border: 5px solid #CCC"};
  }
`;

const ProductDetailsContainer = styled.div`
  width: 35%;
`;

const Title = styled.h3`
  font-weight: ${({ weight }) => `${weight}`};
  font-size: ${({ size }) => (!size && "2.143rem") || `${size}`};
`;

const Paragraph = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
  margin-top: 2.85rem;
`;

const BottomWrapper = styled(FlexContainer)`
  margin-top: 1.43rem;
`;

export {
  Title,
  Paragraph,
  ImageWrapper,
  SwatchFiller,
  PriceWrapper,
  BottomWrapper,
  PageContainer,
  AttributeButton,
  GalleryContainer,
  SmallImagesWrapper,
  AttributeNameWrapper,
  ProductDetailsContainer,
};
