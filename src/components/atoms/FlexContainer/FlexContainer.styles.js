import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  display: flex;
  width: ${({ width }) => width && `${width}`};
  align-items: ${({ align }) => align && `${align}`};
  flex-wrap: ${({ wrap }) => (wrap && "wrap") || "nowrap"};
  margin: ${({ margin }) => (!margin && "0") || `${margin}`};
  justify-content: ${({ justify }) => justify && `${justify}`};
  flex-direction: ${({ column }) => (column && "column") || "row"};
`;

export { Container };
