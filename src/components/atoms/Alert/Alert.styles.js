import styled from "styled-components";

const Container = styled.div`
  top: 50%;
  left: 50%;
  width: 80%;
  display: flex;
  z-index: 9999;
  height: 200px;
  position: fixed;
  padding: 10px 20px;
  border-radius: 10px;
  flex-direction: column;
  transform: translate(-50%, -50%);
  background: ${({ theme, type }) => theme.colors.alert[type].background};
  display: ${({ isShowing }) => (isShowing && "flex") || "none"};

  @media screen and(min-width: 768px) {
    height: 100px;
  }
`;

const CloseButton = styled.button`
  border: none;
  font-size: 20px;
  align-self: flex-end;
  background: transparent;
  color: ${({ theme, type }) => theme.colors.alert[type].text};
`;

const MessageWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AlertMessage = styled.p`
  font-size: 28px;
  color: ${({ type, theme }) => theme.colors.alert[type].text};
`;

export { MessageWrapper, Container, CloseButton, AlertMessage };
