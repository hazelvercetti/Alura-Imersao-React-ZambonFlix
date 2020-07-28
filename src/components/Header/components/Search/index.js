import React from 'react';
import InputGroup from './styles';
import SearchBox from './styles_textbox';
import SearchButton from './styles_button';

function Search() {
    return (
        <InputGroup className="input-group">
            <SearchBox type="text" placeholder="Pesquise por vídeos..." />
            <div class="input-group-append">
                <SearchButton className="fa fa-search" />
            </div>
        </InputGroup>
    );
}

export default Search;