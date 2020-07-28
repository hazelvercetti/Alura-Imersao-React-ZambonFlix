import styled from 'styled-components';
import LogoContainer from '../LogoContainer/styles';

const ContainerSmall = styled(LogoContainer)`
display: none;

@media (max-width: 992px) {
    display: flex !important;
    flex-basis: auto;
}
`;

export default ContainerSmall;