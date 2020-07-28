import styled from 'styled-components';

const SearchButton = styled.a`
color: var(--primary);
margin-top: 0.1em;

&:not([href]) {
    color: var(--primary);
}

@media (max-width: 800px) {
    &:hover&:not([href]) {
        color: var(--white);
    }
}
`;

export default SearchButton;