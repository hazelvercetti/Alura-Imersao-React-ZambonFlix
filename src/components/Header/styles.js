import styled from 'styled-components';

const HeaderContainer = styled.header`
border-bottom: 2px solid var(--primary);
background-color: var(--black) !important;
min-height: 80px;

@media (max-width: 992px) {
    min-height: 60px;
}
`;

export default HeaderContainer;