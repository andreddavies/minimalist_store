import styled from "styled-components";

import { Container } from "../../atoms/FlexContainer/FlexContainer.styles";

const Wrapper = styled(Container)`
  margin: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.cart.product.border};
`;

export { Wrapper };
