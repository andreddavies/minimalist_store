import styled from "styled-components";

const Container = styled.div`
    display flex;
    margin: 0.75rem;
    width: ${({ width }) => `${width}`};
    align-items: ${({ align }) => `${align}`};
    justify-content: ${({ justify }) => `${justify}`};
    flex-direction: ${({ direction }) => `${direction}`};

    ${({ styleProps }) => `${styleProps}`};
`;

export { Container };
