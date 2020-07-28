import styled from 'styled-components';

const MenuContainer = styled.ul`
flex-grow: 4;
@media (max-width: 992px) {
    flex-direction: column;
}
`;

export default MenuContainer;