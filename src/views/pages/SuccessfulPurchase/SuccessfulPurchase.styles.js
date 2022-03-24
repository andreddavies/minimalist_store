import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 100%;
    height: 100%;
    max-width: 60%;
    max-height: 80%;
    object-fit: contain;
  }
`;

export { Container };
