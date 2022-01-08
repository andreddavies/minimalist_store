import styled from "styled-components";

import { Container } from "../../atoms/FlexContainer/FlexContainer.styles";

const CartContainer = styled(Container)`
  margin: 0;
  display: ${({ isShowing }) => (!isShowing && "none") || "flex"};
`;

export { CartContainer };
