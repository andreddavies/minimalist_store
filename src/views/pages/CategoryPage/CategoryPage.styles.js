import styled from "styled-components";

import PagesContainer from "../../../components/organisms/PagesContainer/PagesContainer";

const Container = styled(PagesContainer)`
  justify-content: flex-start;
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin: 60px 0;
  font-size: 1.7rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 3.45rem;
    margin: 80px 0 40px 0;
  }
`;

export { Container, TitleWrapper };
