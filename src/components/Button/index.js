import styled from 'styled-components';

const Button = styled.button`
color: var(--white);
white-space: nowrap;

&:focus, &.focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
}
&:hover {
    color: var(--white);
}
`;

export default Button;