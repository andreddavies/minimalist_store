import styled from "styled-components";

const Select = styled.select`
  border: 0;
  width: 40px;
  height: 30px;
  background: none;
  padding-right: 10px;
  font-size: ${({ theme }) => theme.text.size.text18};
  font-weight: ${({ theme }) => theme.text.weight.medium};
`;

const Option = styled.option``;

export { Select, Option };
