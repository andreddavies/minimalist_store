import styled from "styled-components";

const Container = styled.div`
    display flex;
    width: ${({ width }) => `${width}`};
    flex-wrap: ${({ wrap }) => `${wrap}`};
    align-items: ${({ align }) => `${align}`};
    justify-content: ${({ justify }) => `${justify}`};
    flex-direction: ${({ direction }) => `${direction}`};
    margin: ${({ margin }) => (!margin && "0.75rem") || `${margin}`};

    ${({ styleProps }) => `${styleProps}`};
`;

export { Container };
