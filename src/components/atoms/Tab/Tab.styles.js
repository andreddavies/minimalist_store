import styled from "styled-components";

const TabContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${({ isActive }) =>
    (isActive && "2px solid #5ECE7B") || "none"};
  width: ${({ width }) => (!width && "100%") || `${width}`};
`;

export { TabContainer };
