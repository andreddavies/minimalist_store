import styled from "styled-components";

import { Container } from "../FlexContainer/FlexContainer.styles";

const Wrapper = styled(Container)`
  border-top: 1px solid #e5e5e5;
`;

const Img = styled.img`
  width: 100%;
  height: 137px;

  @media screen and (min-width: 768px) {
    height: 185px;
    max-width: 141px;
  }
`;

export { Wrapper, Img };
