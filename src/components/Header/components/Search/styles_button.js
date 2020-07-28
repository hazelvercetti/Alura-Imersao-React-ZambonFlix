import styled from 'styled-components';

const SearchButton = styled.a`
color: var(--primary);

&:not([href]) {
    color: var(--primary);
}
`;

export default SearchButton;