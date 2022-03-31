import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);

  & > img {
    width: 100%;
    height: 100%;
    max-width: 60%;
    max-height: 80%;
    object-fit: contain;
  }
`;

export { Container };
