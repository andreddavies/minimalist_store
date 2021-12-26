import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme, btnStyle }) =>
    (btnStyle === "none" && "none") ||
    theme.colors.buttons[btnStyle].background};
  border: ${({ theme, btnStyle }) =>
    (btnStyle === "none" && "none") ||
    `1px solid ${theme.colors.buttons[btnStyle].border}`};
  width: ${({ width }) => (!width && "279px") || `${width}`};
  height: ${({ height }) => (!height && "52px") || `${height}`};
  color: ${({ theme, btnStyle }) =>
    (!btnStyle === "none" && theme.colors.buttons[btnStyle].text) || "none"};
`;

export { Button };
