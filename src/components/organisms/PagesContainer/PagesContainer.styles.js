import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  width: ${({ width }) => (!width && "95%") || `${width}`};

  @media screen and (min-width: 768px) {
    width: ${({ tabletScreenWidth }) =>
      (!tabletScreenWidth && "85%") || `${tabletScreenWidth}`};
  }
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export { Container, ChildrenWrapper };
