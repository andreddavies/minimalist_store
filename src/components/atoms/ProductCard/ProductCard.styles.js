import styled from "styled-components";

const IconWrapper = styled.div`
  top: -26px;
  right: -70%;
  width: 60px;
  height: 60px;
  z-index: 9999;
  display: flex;
  position: relative;
  justify-content: flex-end;

  & > svg {
    display: none;
  }
`;

const ProductItem = styled.li`
  width: 40%;
  margin: 50px 0;
  cursor: pointer;
  max-width: 354px;

  &&:hover {
    box-shadow: 0px 4px 35px
      ${({ theme }) => theme.colors.productCard.cardShadow};

    ${IconWrapper} {
      & > svg {
        display: flex;
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 33.3%;
    margin: 40px 0;
    max-width: none;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 354px;
  position: relative;

  & > img {
    width: 100%;
    max-height: 330px;
    object-fit: contain;
  }
`;

const ImageOverflow = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  bottom: 60px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background: rgba(250, 250, 250, 0.5);
`;

const ProductInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: -1.5rem;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    margin-top: -3rem;
  }
`;

const Title = styled.h3`
  font-weight: 300;
  font-size: 0.9rem;
  color: ${({ theme, inStock }) =>
    !inStock && theme.colors.productCard.outOfStock};

  @media screen and (min-width: 768px) {
    font-size: 1.17rem;
    margin-top: 1.7rem;
  }
`;

const PriceWrapper = styled.div`
  font-weight: 500;
  color: ${({ theme, inStock }) =>
    !inStock && theme.colors.productCard.outOfStock};

  @media screen and (min-width: 768px) {
    font-size: 1.17rem;
  }
`;

export {
  Title,
  ProductItem,
  IconWrapper,
  ImageWrapper,
  PriceWrapper,
  ImageOverflow,
  ProductInfoWrapper,
};
