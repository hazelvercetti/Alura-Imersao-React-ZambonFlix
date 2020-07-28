import styled from 'styled-components';

const Logo = styled.img`
max-height: 40px;

padding-left: ${props => props.marginLeft || 0};

@media (max-width: 800px) {
    max-height: 18px;
}
`;

export default Logo;