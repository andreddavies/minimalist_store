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
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 80%;
    max-height: none;
  }
`;

const SmallImagesWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  overflow-x: scroll;
  margin-top: 0.75rem;

  & > img {
    height: 100%;
    max-width: 80px;
    max-height: 80px;

    @media screen and (min-width: 768px) {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    width: 12%;
    height: 100%;
    margin-top: 0;
    overflow-x: auto;
    align-items: center;
    flex-direction: column;
  }
`;

const ProductDetailsContainer = styled.div`
  width: 40%;
`;

const Title = styled.h3`
  font-size: 2.143rem;
  font-weight: ${({ weight }) => `${weight}`};
`;

export {
  Title,
  ImageWrapper,
  GalleryContainer,
  SmallImagesWrapper,
  ProductDetailsContainer,
};
