import styled from 'styled-components';

const SearchButton = styled.a`
color: var(--primary);

&:not([href]) {
    color: var(--primary);
}

/* @media (max-width: 1120px) {
    font-size: xx-large;
    
    &:hover&:not([href]) {
        color: var(--white);
    }
}

@media (max-width: 800px) {
    font-size: large;
} */
`;

export default SearchButton;