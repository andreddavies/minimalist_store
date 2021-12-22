import styled from "styled-components";

const Paragraph = styled.p`
  font-size: ${({ theme, size }) =>
    theme.text.size[(!size && "text14") || `${size}`]};
  font-weight: ${({ theme, weight }) =>
    theme.text.weight[(!weight && "regular") || `${weight}`]};
  color: ${({ theme, color }) => theme.colors.paragraph[color]};
`;

export { Paragraph };
