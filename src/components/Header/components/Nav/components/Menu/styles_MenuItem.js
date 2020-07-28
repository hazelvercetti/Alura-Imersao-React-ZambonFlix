import styled from 'styled-components';

const MenuItem = styled.a`
color: ${props => props.foreColor || 'var(--white)'};
cursor: pointer;
padding: 0.35em 0.6em;
margin: 0.25em 0;
border-radius: 0.5em;
font-style: normal;
font-weight: bold;
font-size: 1em;
outline: none;
text-decoration: none;

&:hover {
    background-color: rgba(255,255,255,0.1);
    color: ${props => props.foreColor || 'var(--white)'};
}

&:active {
    background-color: var(--primary);
}

@media (max-width: 800px) {
    font-size: 0.8em;
}
`;

export default MenuItem;