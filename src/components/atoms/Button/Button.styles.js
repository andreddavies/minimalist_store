import styled from "styled-components";

const Button = styled.button`
  width: ${({ width }) => (!width && "279px") || `${width}`};
`;

export { Button };
