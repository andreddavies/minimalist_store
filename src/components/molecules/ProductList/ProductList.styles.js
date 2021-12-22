import styled from "styled-components";

const Container = styled.div``;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  list-style-type: none;
  justify-content: space-evenly;
`;

const ListItem = styled.li`
  width: 40%;
  margin: 50px 0;

  @media screen and (min-width: 768px) {
    width: 30%;
    margin: 100px 0;
  }
`;

export { Container, List, ListItem };
