import styled from 'styled-components';
import LogoSmall from './styles_LogoSmall';

const Logo = styled(LogoSmall)`
@media (max-width: 992px) {
    &.hide-small {
        display: none;
    }
}
`;

export default Logo;