import styled from "styled-components";
import { Link } from "react-router-dom";

import { Container as FlexContainer } from "../FlexContainer/FlexContainer.styles";

const IconWrapper = styled.div`
  top: -26px;
  right: -70%;
  width: 60px;
  z-index: 94;
  height: 60px;
  display: flex;
  position: relative;
  justify-content: flex-end;

  & > svg {
    display: none;
  }
`;

const ProductItem = styled.li`
  width: 33.3%;
  margin: 40px 0;
  cursor: pointer;

  &&:hover {
    box-shadow: 0px 4px 35px
      ${({ theme }) => theme.colors.productCard.cardShadow};

    ${IconWrapper} {
      & > svg {
        display: flex;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ItemWrapper = styled(FlexContainer)`
  padding: 16px;
  align-items: center;
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
  z-index: 90;
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
  margin-top: -3rem;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h3`
  font-weight: 300;
  font-size: 1.17rem;
  margin-top: 1.7rem;
  color: ${({ theme, inStock }) =>
    !inStock && theme.colors.productCard.outOfStock};
`;

const PriceWrapper = styled.div`
  font-weight: 500;
  font-size: 1.17rem;
  color: ${({ theme, inStock }) =>
    !inStock && theme.colors.productCard.outOfStock};
`;

export {
  Title,
  StyledLink,
  ProductItem,
  IconWrapper,
  ItemWrapper,
  ImageWrapper,
  PriceWrapper,
  ImageOverflow,
  ProductInfoWrapper,
};
