import React from 'react';
import InputGroup from './styles';
import SearchBox from './styles_textbox';
import SearchButton from './styles_button';
import ButtonGroup from './styles_ButtonGroup';

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

export default Search;