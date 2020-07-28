import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Logo, LogoSmall, LogoContainer, ContainerSmall } from './Logo/styles';
import Nav from './Nav';
import Search from './Search';
import Buttons from './Buttons';

import LogoFull from '../../assets/img/Logo.png';
import LogoMini from '../../assets/img/Logo_Mini.png';

function Header() {
    return (
        <HeaderContainer className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <LogoContainer as={Link} className="navbar-brand" to="/">
                    <LogoSmall src={LogoMini} alt="Zambonflix Logo" />
                    <Logo src={LogoFull} alt="Zambonflix" className="pl-2 hide-small" />
                </LogoContainer>

                <ContainerSmall className="navbar-show"  href="/">
                    <Logo src={LogoFull} alt="Zambonflix" className="pl-2" />
                </ContainerSmall>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-bars"></span>
                </button>

                <div className="collapse navbar-collapse mw-100" id="navbar">
                    <Nav />

                    <ActionsContainer className="form-inline">                
                        <Search></Search>

                        <Buttons></Buttons>
                    </ActionsContainer>
                </div>
            </div>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    border-bottom: 2px solid var(--primary);
    background-color: var(--black) !important;
    min-height: 80px;

    @media (max-width: 992px) {
        min-height: 60px;
    }
`;

const ActionsContainer = styled.div`
    flex-grow: 3;
    flex-flow: row nowrap;

    @media (max-width: 992px) {
        margin-top: 0.5em;
    }

    @media (max-width: 370px) {
        flex-wrap: wrap;

        & > *:not(:first-child) {
            margin-top: 0.5em;
            margin-left: 0 !important;
        }
    }
`;

export default Header;