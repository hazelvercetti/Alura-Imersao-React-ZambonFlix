import React from 'react';
import { Link } from 'react-router-dom';
import ButtonsContainer from './styles';
import Button from '../../../Button';

function Buttons() {
    return (
        <ButtonsContainer className="ml-2">
            <Button as={Link} to="/auth/login" className="btn btn-primary" backgroundcolor="var(--primary)">
                <i className="fa fa-user mr-2" />
                Entrar
            </Button>
        </ButtonsContainer>
    );
}

export default Buttons;