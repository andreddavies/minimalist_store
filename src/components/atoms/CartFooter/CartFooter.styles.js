import styled from "styled-components";

import { Button } from "../Button/Button.styles";
import { Container as FlexContainer } from "../FlexContainer/FlexContainer.styles";

const CartFooterContainer = styled.div`
  bottom: 0;
  width: 100%;
  display: flex;
  padding-bottom: 15px;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  position: ${({ isCartOverlay }) => (isCartOverlay && "sticky") || "fixed"};
`;

const CenterContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`;

const PriceWrapper = styled(FlexContainer)`
  margin: 0.75rem 0;
  justify-content: flex-end;
`;

const ViewBagButton = styled(Button)`
  height: 43px;
  display: ${({ cartOverlay }) => (!cartOverlay && "none") || "block"};
`;

const ButtonWrapper = styled(FlexContainer)`
  ${({ cartOverlay }) => !cartOverlay && "justify-content: flex-end"};
`;

const CheckoutButton = styled(Button)`
  height: 43px;
  width: 130px;
`;

export {
  PriceWrapper,
  ButtonWrapper,
  ViewBagButton,
  CheckoutButton,
  CenterContainer,
  CartFooterContainer,
};
