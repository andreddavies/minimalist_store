import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ margin }) => `${margin}`};
`;

const Image = styled.img`
  width: 41px;
  height: 41px;
`;

export { HeaderContainer, Box, Image };
