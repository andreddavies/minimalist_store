import styled from "styled-components";

import { Button } from "../../atoms/Button/Button.styles";
import { Container } from "../FlexContainer/FlexContainer.styles";

const Wrapper = styled(Container)`
  border-top: 1px solid #e5e5e5;
`;

const AttributeButton = styled(Button)`
  width: 63px;
  height: 45px;
  margin-right: 10px;
  border: ${({ active }) => active && "4px solid #d3d3d3"};
`;

const SwatchFiller = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ backgroundColor }) => backgroundColor};
`;

const Img = styled.img`
  width: 100%;
  height: 137px;

  @media screen and (min-width: 768px) {
    height: 185px;
    max-width: 141px;
  }
`;

export { Wrapper, AttributeButton, Img, SwatchFiller };
