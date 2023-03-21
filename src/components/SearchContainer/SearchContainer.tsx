import React from 'react';
import { SearchContainerWrapper } from '../components';
import SearchForm from './SearchForm/SearchForm';

const SearchContainer = () => {
    return (
        <SearchContainerWrapper maxWidth={false}>
            <SearchForm/>
        </SearchContainerWrapper>
    );
};

export default SearchContainer;