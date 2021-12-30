import styled from "styled-components";

const Button = styled.button`
  outline: 0;
  cursor: pointer;
  color: ${({ theme, btnStyle }) =>
    (btnStyle === "none" && "transparent") ||
    theme.colors.buttons[btnStyle].text};
  background: ${({ theme, btnStyle }) =>
    (btnStyle === "none" && "transparent") ||
    theme.colors.buttons[btnStyle].background};
  border: ${({ theme, btnStyle }) =>
    (btnStyle === "none" && "transparent") ||
    `1px solid ${theme.colors.buttons[btnStyle].border}`};
  font-size: ${({ fontSize }) => fontSize && `${fontSize}`};
  width: ${({ width }) => (!width && "279px") || `${width}`};
  height: ${({ height }) => (!height && "52px") || `${height}`};
  font-weight: ${({ fontWeight }) => fontWeight && `${fontWeight}`};

  ${({ styleProps }) => styleProps && `${styleProps}`};

  &&:hover {
    background: ${({ theme, btnStyle }) =>
      (btnStyle === "none" && "none") || theme.colors.buttons[btnStyle].hover};
  }

  &&:active {
    background: ${({ theme, btnStyle }) =>
      (btnStyle === "none" && "none") || theme.colors.buttons[btnStyle].active};
  }
`;

export { Button };
