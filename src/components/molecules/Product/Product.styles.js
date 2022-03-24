import styled from "styled-components";

import { Button } from "../../atoms/Button/Button.styles";

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

const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    width: 60%;
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-height: 200px;

  & > img {
    width: auto;
    height: 100%;
    max-width: 100%;
    max-height: 511px;
    object-fit: contain;
  }

  @media screen and (min-width: 768px) {
    width: 80%;
    display: flex;
    max-height: 511px;
    align-items: center;
    justify-content: center;
  }
`;

const SmallImagesWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  overflow-x: scroll;
  margin-top: 0.75rem;
  justify-content: space-between;

  & > img {
    width: 80px;
    height: 100%;
    cursor: pointer;
    max-height: 80px;
    margin-left: 20px;
    object-fit: contain;
    ${({ selected }) => selected && "border: 5px solid #CCC"};

    @media screen and (min-width: 768px) {
      width: 100%;
      margin-left: 0;
      max-height: 150px;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 12%;
    height: 100%;
    margin-top: 0;
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
  }
`;

const ProductDetailsContainer = styled.div`
  width: 100%;
  margin-top: 1.2rem;

  @media screen and (min-width: 768px) {
    width: 35%;
    margin-top: 0;
  }
`;

const Title = styled.h3`
  font-weight: ${({ weight }) => `${weight}`};
  font-size: ${({ size }) => (!size && "1.5rem") || `${size}`};

  @media screen and (min-width: 768px) {
    font-size: ${({ size }) => (!size && "2.143rem") || `${size}`};
  }
`;

const Paragraph = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
  margin-top: 2.85rem;
`;

export {
  Title,
  Paragraph,
  ImageWrapper,
  SwatchFiller,
  AttributeButton,
  GalleryContainer,
  SmallImagesWrapper,
  ProductDetailsContainer,
};
