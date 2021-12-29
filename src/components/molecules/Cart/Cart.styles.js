import styled from "styled-components";

import { Container } from "../../atoms/FlexContainer/FlexContainer.styles";

const Wrapper = styled(Container)`
  margin: ${({ margin }) => (!margin && "0") || `${margin}`};
  height: ${({ height }) => (!height && "auto") || `${height}`};
  border-top: 1px solid ${({ theme }) => theme.colors.cart.product.border};

  ${({ styleProps }) => styleProps && `${styleProps}`};
`;

const Img = styled.img`
  height: 10rem;
  max-width: 141px;
`;

export { Wrapper, Img };
