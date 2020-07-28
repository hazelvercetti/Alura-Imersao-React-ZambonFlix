import React from 'react';
import styled from 'styled-components';
import HeaderContainer from './styles';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Search from './components/Search';
import Actions from './components/Actions';

import LogoFull from '../../assets/img/Logo.png';
import LogoMini from '../../assets/img/Logo_Mini.png';

const LogoContainer = styled.div`
    white-space: nowrap;
`;

function Header() {
    return (
        <HeaderContainer>
            <LogoContainer href="/">
                <Logo src={LogoMini} alt="Zambonflix Logo" />
                <Logo src={LogoFull} alt="Zambonflix" marginLeft="0.25em" />
            </LogoContainer>

            <Nav />

            <Search></Search>

            <Actions></Actions>

            {/* <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button> */}
        </HeaderContainer>
    );
}

export default Header;