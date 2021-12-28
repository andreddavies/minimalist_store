import styled from "styled-components";

const Container = styled.h3`
  font-size: ${({ size }) => (!size && "18px") || `${size}`};
  color: ${({ theme, color }) => theme.colors.heading[color]};
  margin: ${({ margin }) => (!margin && "1rem 0") || `${margin}`};
  font-weight: ${({ weight }) => (!weight && "500") || `${weight}`};

  @media screen and(min-width: 768px) {
    ${({ tabletMinScreen }) => tabletMinScreen && `${tabletMinScreen}`};
  }
`;

export { Container };
