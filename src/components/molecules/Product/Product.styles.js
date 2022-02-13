import styled from "styled-components";

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
  }

  @media screen and (min-width: 768px) {
    width: 80%;
    max-height: 511px;
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
    ${(props) => props.selected && "border: 5px solid #CCC"};

    @media screen and (min-width: 768px) {
      width: 100%;
      margin-left: 0;
      margin-bottom: 1.28rem;
    }
  }

  @media screen and (min-width: 768px) {
    width: 12%;
    height: 100%;
    margin-top: 0;
    overflow-x: auto;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
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

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
  margin-top: 2.85rem;
`;

export {
  Title,
  Paragraph,
  ImageWrapper,
  GalleryContainer,
  SmallImagesWrapper,
  ProductDetailsContainer,
};
