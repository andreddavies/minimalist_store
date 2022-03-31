import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  height: 100%;
  margin-top: 80px;
`;

const BackgroundWall = styled.div`
  width: 100%;
  z-index: 95;
  height: 100%;
  opacity: 0.6;
  position: fixed;
  background: ${({ theme }) => theme.colors.backgroundWall};
  display: ${({ modalActive }) => (modalActive && "block") || "none"};
`;

export { Main, BackgroundWall };
