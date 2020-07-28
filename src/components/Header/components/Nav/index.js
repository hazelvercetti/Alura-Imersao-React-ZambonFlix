import React from 'react';
import NavContainer from './styles';
import MenuContainer from './components/Menu/styles_MenuContainer';
import MenuSpacer from './components/Menu/styles_MenuSpacer';
import Menu from './components/Menu';

import dadosIniciais from '../../../../data/dados_iniciais.json';

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

export default Nav;