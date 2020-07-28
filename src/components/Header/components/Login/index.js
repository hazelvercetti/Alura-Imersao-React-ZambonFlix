import React from 'react';
import Button from '../../../Button';

function Login() {
    return (
        <Button href="#" className="btn btn-primary" backgroundColor="var(--primary)">
            <i className="fa fa-user mr-2" />
            Entrar
        </Button>
    );
}

export default Login;