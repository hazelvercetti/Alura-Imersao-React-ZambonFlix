import React from 'react';
import styled from 'styled-components';
import Button from '../../../Button';
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
            <Button className={menuClass} href="#" role="button" data-toggle={subMenus ? 'dropdown' : undefined} aria-haspopup="true" aria-expanded="false">
                {displayName}
            </Button>

            {dropdown}
        </ListItemMenu>
    );
}

const ListItemMenu = styled.li`
    flex-grow: 1;
    text-align: center;
`;


export default Menu;