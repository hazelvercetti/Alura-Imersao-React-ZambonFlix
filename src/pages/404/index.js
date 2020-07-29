import React from 'react';
import PageTemplate from '../../components/PageTemplate';

function NotFound() {
  return (
    <PageTemplate>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h1 class="text-center">Ops, parece que você acessou algo que não existe (ainda) :O</h1>
        <p>
            Você pode <a className="btn btn-primary" href="/">voltar para a home</a> ou jogar um jogo :)
        </p>
        <iframe className="container border-0" title="The Adventures of Hipsta" src="https://ricardozambon.github.io/Alura-Imersao-GameDev/" height="600" />
    </div>
    </PageTemplate>
  );
}

export default NotFound;
