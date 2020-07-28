import React from 'react';
import styled from 'styled-components';
import BlurContainer from '../../../Blur/styles';

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

const DropdownContainer = styled(BlurContainer)`
    padding: 0.25em;
    border-radius: 0.7rem;
    background-color: rgba(0,0,0,0.8);
    border: 1px solid rgba(0, 0, 0, 0.95);
    border-bottom: 3px solid var(--primary);
`;

const MenuItem = styled.a`
    color: var(--white);

    @media (max-width: 992px) {
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;

export default Dropdown;