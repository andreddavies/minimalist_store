import styled from "styled-components";

const Container = styled.div`
  width: 95%;
  display: flex;
  margin: 0 auto;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 85%;
  }
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export { Container, ChildrenWrapper };
