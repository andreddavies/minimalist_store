import styled from "styled-components";
import { Link } from "react-router-dom";

const CartFooterContainer = styled.div`
  bottom: 0;
  width: 100%;
  display: flex;
  background: #fff;
  position: sticky;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    ${({ isCartOverlay, cartLength }) =>
      !isCartOverlay &&
      `
      bottom: 0;
      position: ${(cartLength === 0 && "fixed") || "sticky"};
    `}
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  color: inherit;
  align-items: center;
  text-decoration: none;
  justify-content: center;
`;

export { CartFooterContainer, StyledLink };
