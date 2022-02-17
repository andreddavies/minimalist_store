import styled from "styled-components";

const Select = styled.select`
  border: 0;
  width: 85px;
  height: 30px;
  margin: 0.75rem;
  cursor: pointer;
  background: none;
  font-size: ${({ theme }) => theme.text.size.text18};
  font-weight: ${({ theme }) => theme.text.weight.medium};
`;

export { Select };
