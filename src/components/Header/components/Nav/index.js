import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from '../../../../data/dados_iniciais.json';

function Nav() {

    const categorias = dadosIniciais.categorias.map((categoria, index) => ({ key: index, title: categoria.titulo, src: '' }));

    return (
        <nav>
            <ul className="list-group list-group-horizontal list-unstyled">
                <li>
                    <Menu displayName="Categorias" subMenus={categorias} />
                </li>
                <li>
                    <Menu displayName="Planos" />
                </li>
                <li>
                    <Menu displayName="Canais" />
                </li>
            </ul>
        </nav>
    );
}

export default Nav;