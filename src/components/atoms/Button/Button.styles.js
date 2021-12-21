import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme, btnStyle }) =>
    theme.colors.buttons[btnStyle].background};
  width: ${({ width }) => (!width && "279px") || `${width}`};
  height: ${({ height }) => (!height && "52px") || `${height}`};
  border: 1px solid
    ${({ theme, btnStyle }) => theme.colors.buttons[btnStyle].border};
  color: ${({ theme, btnStyle }) => theme.colors.buttons[btnStyle].text};
`;

export { Button };
