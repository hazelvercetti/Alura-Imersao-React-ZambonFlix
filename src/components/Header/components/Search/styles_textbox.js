import styled from 'styled-components';

const SearchBox = styled.input`
background-color: transparent;
border: none;
outline: none;
color: var(--white);
font-size: 0.9em;

@media (max-width: 800px) {
    display: none;
}
`;

export default SearchBox;