import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => (!justify && "center") || `${justify}`};

  @media screen and (min-width: 768px) {
    justify-content: ${({ justify }) => justify && "center"};
  }
`;

const CartQuantity = styled.div`
  top: -35px;
  right: -5px;
  width: 20px;
  height: 20px;
  display: flex;
  position: relative;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.cart.overlay.background};

  @media screen and (min-width: 768px) {
    top: -35px;
    right: -10px;
  }
`;

const Image = styled.img`
  width: 41px;
  height: 41px;
`;

export { HeaderContainer, Box, CartQuantity, Image };
