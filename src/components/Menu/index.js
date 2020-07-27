import React from 'react';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import Nav from './styles';
import './menu.css';

function Menu() {
    return (
        <Nav>
            <a href="/">
                <img className="Logo" src={Logo} alt="SamuraiFlix" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </Nav>
    );
}

export default Menu;