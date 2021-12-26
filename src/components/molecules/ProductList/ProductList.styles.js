import styled from "styled-components";

const Container = styled.div``;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  list-style-type: none;
  justify-content: space-evenly;
`;

const ListItem = styled.li`
  width: 40%;
  margin: 50px 0;
  max-width: 354px;

  &&:hover {
    box-shadow: 0px 4px 35px
      ${({ theme }) => theme.colors.productCard.cardShadow};
    filter: drop-shadow(
      0px 4px 35px ${({ theme }) => theme.colors.productCard.cardShadow}
    );
  }

  @media screen and (min-width: 768px) {
    width: 30%;
    margin: 100px 0;
  }
`;

const Center = styled.div`
  width: 100%;
  padding: 16px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 354px;

  & > img {
    width: 100%;
    max-height: 330px;
  }
`;

const IconWrapper = styled.div`
  top: -26px;
  width: 95%;
  height: 52px;
  display: flex;
  position: relative;
  justify-content: flex-end;
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
  List,
  Title,
  Center,
  ListItem,
  Container,
  IconWrapper,
  ImageWrapper,
  PriceWrapper,
  ProductInfoWrapper,
};
