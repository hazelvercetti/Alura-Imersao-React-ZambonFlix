import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const Main = styled.main`
background-color: var(--dark);
color: var(--white);
flex: 1;
`;

function PageTemplate({ showMargins, children }) {
    return (
        <>
            <Header />
            <Main className={(showMargins ?? true) ? "pt-5 px-3" : ""}>
                { children }
            </Main>
            <Footer />
        </>
    );
}

export default PageTemplate;