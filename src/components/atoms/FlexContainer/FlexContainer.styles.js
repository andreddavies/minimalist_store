import styled from "styled-components";

const Container = styled.div`
    display flex;
    width: ${({ width }) => `${width}`};
    flex-wrap: ${({ wrap }) => `${wrap}`};
    align-items: ${({ align }) => `${align}`};
    justify-content: ${({ justify }) => `${justify}`};
    flex-direction: ${({ direction }) => `${direction}`};
    margin: ${({ margin }) => (!margin && "1rem 0") || `${margin}`};

    ${({ styleProps }) => `${styleProps}`};
`;

export { Container };
