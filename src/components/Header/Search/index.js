import React from 'react';
import styled from 'styled-components';
import InputGroup from './styles';

function Search() {
    return (
        <InputGroup className="input-group px-2 py-1">
            <SearchBox type="text" placeholder="Pesquise por vídeos..." />

            <ButtonGroup className="input-group-append pl-1">
                <SearchButton className="fa fa-search" />
            </ButtonGroup>
        </InputGroup>
    );
}

const SearchButton = styled.a`
    color: var(--primary);

    &:not([href]) {
        color: var(--primary);
    }
`;

const ButtonGroup = styled.div`
    align-items: center;
`;

const SearchBox = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--white);
    flex-grow: 1;
`;

export default Search;