import React from 'react';
import ParentMenu from './styles_ParentMenu';
import Dropdown from '../Dropdown/index';

function Menu({ displayName, subMenus }) {

    var classes = 'btn';
    var dropdown = <Dropdown subMenus={subMenus} />

    if (!subMenus)
    {
        dropdown = <div></div>
    }
    else {
        classes += ' dropdown-toggle';
    }

    return (
        <React.Fragment>
            <ParentMenu className={classes} href="#" role="button" data-toggle={subMenus ? 'dropdown' : undefined} aria-haspopup="true" aria-expanded="false">
                {displayName}
            </ParentMenu>

            {dropdown}
        </React.Fragment>
    );
}

export default Menu;