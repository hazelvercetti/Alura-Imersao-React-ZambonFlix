import React from 'react';
import LogoContainer from './components/Logo/components/LogoContainer/styles';
import LogoSmall from './components/Logo/styles_LogoSmall';
import Logo from './components/Logo/styles_Logo';
import Nav from './components/Nav';
import Search from './components/Search';
import Buttons from './components/Buttons';
import ActionsContainer from './components/ActionsContainer/styles';
import ContainerSmall from './components/Logo/components/ContainerSmall/styles';

import LogoFull from '../../assets/img/Logo.png';
import LogoMini from '../../assets/img/Logo_Mini.png';


function Header() {
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <LogoContainer className="navbar-brand" href="/">
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
        </header>
    );
}

export default Header;