import styled from 'styled-components';

export const LogoContainer = styled.a`
    padding: 0 0;
    margin: 0;
    line-height: normal;
    height: 30px;
    white-space: nowrap;
`;

export const ContainerSmall = styled(LogoContainer)`
    display: none;

    @media (max-width: 992px) {
        display: flex !important;
        flex-basis: auto;
    }
`;

export const LogoSmall = styled.img`
    max-height: 100%;
`;


export const Logo = styled(LogoSmall)`
    @media (max-width: 992px) {
        &.hide-small {
            display: none;
        }
    }
`;