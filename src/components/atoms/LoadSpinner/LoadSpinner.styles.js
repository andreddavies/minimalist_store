import styled from "styled-components";

const SpinnerContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;
  width: ${({ width }) => (!width && "100%") || width};
  height: ${({ height }) => (!height && "100%") || height};

  @media screen and (min-width: 768px) {
    width: 30%;
    height: 30%;
  }

  & .path {
    stroke: #5ece7b;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dashoffset: 0;
      stroke-dasharray: 1, 150;
    }
    50% {
      stroke-dashoffset: -35;
      stroke-dasharray: 90, 150;
    }
    100% {
      stroke-dashoffset: -124;
      stroke-dasharray: 90, 150;
    }
  }
`;

export { SpinnerContainer, StyledSpinner };
