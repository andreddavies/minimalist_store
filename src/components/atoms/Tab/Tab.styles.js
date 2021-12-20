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

const Paragraph = styled.p`
  color: #5ece7b;
  font-size: 16px;
  font-weight: 600;
`;

export { TabContainer, Paragraph };
