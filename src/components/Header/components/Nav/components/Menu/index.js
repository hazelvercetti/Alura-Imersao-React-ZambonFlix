import React from 'react';
import ListItemMenu from './styles_ListItemMenu';
import ParentMenu from './styles_ParentMenu';
import Dropdown from '../Dropdown/index';

function Menu({ displayName, subMenus }) {

    var liClass = '';
    var menuClass = 'btn';
    var dropdown = <Dropdown subMenus={subMenus} />

    if (!subMenus)
    {
        dropdown = <div></div>
    }
    else {
        menuClass += ' dropdown-toggle';
        liClass = 'dropdown';
    }

    return (
        <ListItemMenu className={liClass}>
            <ParentMenu className={menuClass} href="#" role="button" data-toggle={subMenus ? 'dropdown' : undefined} aria-haspopup="true" aria-expanded="false">
                {displayName}
            </ParentMenu>

            {dropdown}
        </ListItemMenu>
    );
}

export default Menu;