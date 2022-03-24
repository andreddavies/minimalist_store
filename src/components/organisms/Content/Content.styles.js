import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const BackgroundWall = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.6;
  z-index: 1000;
  position: fixed;
  background: ${({ theme }) => theme.colors.backgroundWall};
  display: ${({ modalActive }) => (modalActive && "block") || "none"};
`;

export { Main, BackgroundWall };
