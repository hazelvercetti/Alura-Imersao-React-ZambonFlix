import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate';

function Login() {
  return (
    <PageTemplate>
      <Link to="/videos/new">Novo vídeo</Link>

      <Link to="new">Novo login</Link>
    </PageTemplate>
  );
}

export default Login;
