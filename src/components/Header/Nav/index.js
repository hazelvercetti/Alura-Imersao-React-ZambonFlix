import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';

import dadosIniciais from '../../../data/dados_iniciais.json';

function Nav() {

    const categorias = dadosIniciais.categorias.map((categoria, index) => ({ key: index, title: categoria.titulo, src: '' }));

    return (
        <NavContainer className="navbar-nav">
            <MenuSpacer />
            <MenuContainer className="list-group list-group-horizontal list-unstyled">
                <Menu displayName="Categorias" subMenus={categorias} />
            
                <Menu displayName="Planos" />
            
                <Menu displayName="Canais" />
            </MenuContainer>
            <MenuSpacer />
        </NavContainer>
    );
}

const NavContainer = styled.nav`
    flex-grow: 5;
    justify-content: center;

    @media (max-width: 992px) {
        margin-top: 0.5em;
    }
`;

const MenuSpacer = styled.div`
    flex-grow: 1;
`;

const MenuContainer = styled.ul`
    flex-grow: 4;
    @media (max-width: 992px) {
        flex-direction: column;
    }
`;


export default Nav;