import styled from 'styled-components';

const InputGroup = styled.div`
border: 1px solid var(--primary);
border-radius: 1.5em;
flex-direction: row;
flex-flow: nowrap;
flex-grow: 2;

-webkit-transition: background-color 0.4s linear;
-moz-transition: background-color 0.4s linear;
-o-transition: background-color 0.4s linear;
transition: background-color 0.4s linear;

& * {
    -webkit-transition: color 0.4s linear;
    -moz-transition: color 0.4s linear;
    -o-transition: color 0.4s linear;
    transition: color 0.4s linear;
}

&:active,
&:focus-within {
    background-color: var(--primary);
    color: var(--white);
}

&:focus-within *, &:focus-within a:not([href]) {
    color: var(--white);
}

&:focus-within input[type="text"]::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--white) !important;
    opacity: 1; /* Firefox */
}

&:focus-within input[type="text"]:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: var(--white);
}

&:focus-within input[type="text"]::-ms-input-placeholder { /* Microsoft Edge */
    color: var(--white);
}
`;

export default InputGroup;