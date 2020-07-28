import styled from 'styled-components';

const MenuItem = styled.a`
color: var(--white);

@media (max-width: 992px) {
    text-overflow: ellipsis;
    overflow: hidden;
}
`;

export default MenuItem;