import React from 'react';
import ButtonsContainer from './styles';
import Login from '../Login';

function Buttons() {
    return (
        <ButtonsContainer className="ml-2">
            <Login></Login>
        </ButtonsContainer>
    );
}

export default Buttons;