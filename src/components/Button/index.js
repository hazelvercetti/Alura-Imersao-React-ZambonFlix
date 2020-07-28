import styled from 'styled-components';

const Button = styled.button`
color: ${props => props.foreColor || 'var(--white)'};
background-color: ${props => props.backgroundColor || 'transparent'};
cursor: pointer;

margin: 0 1em;
padding: 0.7em;

font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 0.95em;
text-transform: uppercase;
white-space: nowrap;

outline: none;
border-radius: 5px;
text-decoration: none;

border-width: 0.2rem;
border-color: rgba(255,255,255,0);
-webkit-transition: border-color 0.4s linear;
-moz-transition: border-color 0.4s linear;
-o-transition: border-color 0.4s linear;
transition: border-color 0.4s linear;

&:hover,
&:focus {
    color: ${props => props.foreColor || 'var(--white)'};
    border-width: 0.2rem;
    border-color: rgba(255,255,255,0.5);
    box-shadow: none;
}


@media (max-width: 800px) {
    padding: 0.25em;
    margin: 0 0.6em;
    font-size: 0.6em;

    &::after {
        font-size: 10px !important;
    }

}

/* @media (max-width: 800px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--primary);
    border-radius: 0;
    border: 0;
    text-align: center;
} */
`;

export default Button;