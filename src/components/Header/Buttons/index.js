import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../Button';

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

const ButtonsContainer = styled.div`
    flex-grow: 1;
    text-align: center;
    flex-basis: 0;
`;

export default Buttons;