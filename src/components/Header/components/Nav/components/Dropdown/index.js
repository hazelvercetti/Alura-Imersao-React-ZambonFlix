import React from 'react';
import DropdownContainer from './styles';
import MenuItem from '../Menu/styles_MenuItem';

function Dropdown({ subMenus }) {
    return (
        <DropdownContainer className="dropdown-menu">
            {
                (subMenus || []).map(menu => {
                    return (
                        <MenuItem className="dropdown-item" key={menu.key} href={menu.src}>{menu.title}</MenuItem>
                    );
               })
            }
        </DropdownContainer>
    );
}

export default Dropdown;