import styled from "styled-components";

const HeaderContainer = styled.header`
  top: 0;
  width: 100%;
  z-index: 105;
  height: 80px;
  display: flex;
  position: fixed;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
`;

const CenterWrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => (!justify && "center") || `${justify}`};
`;

const CartQuantity = styled.div`
  top: -35px;
  width: 20px;
  right: -10px;
  height: 20px;
  display: flex;
  position: relative;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.cart.overlay.background};
`;

const Image = styled.img`
  width: 41px;
  height: 41px;
`;

export { HeaderContainer, CenterWrapper, Box, CartQuantity, Image };
