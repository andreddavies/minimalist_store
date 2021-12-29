import styled from "styled-components";

const Container = styled.div`
    display flex;
    width: ${({ width }) => width && `${width}`};
    flex-wrap: ${({ wrap }) => wrap && `${wrap}`};
    align-items: ${({ align }) => align && `${align}`};
    justify-content: ${({ justify }) => justify && `${justify}`};
    margin: ${({ margin }) => (!margin && "1rem 0") || `${margin}`};
    flex-direction: ${({ direction }) => direction && `${direction}`};

    ${({ styleProps }) => styleProps && `${styleProps}`};

    @media screen and (min-width: 768px){
        ${({ tabletMinScreen }) => tabletMinScreen && `${tabletMinScreen}`};
    }
`;

export { Container };
