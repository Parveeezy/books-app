import React, { useState } from 'react';
import { FormTitle, FormWrapper, SearchBlock, SelectsBlock } from './components';
import CustomInput from '../CustomInput/CustomInput';
import CustomBtn from '../CustomBtn/CustomBtn';
import Selects from '../Selects/Selects';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store/store';
import { fetchBooks } from '../../../redux/getBooksSlice/getBooksSlice';

const SearchForm = () => {



    return (
        <FormWrapper>
            <FormTitle>Search books</FormTitle>
            <SearchBlock>
                <CustomInput/>
                <CustomBtn/>
            </SearchBlock>
            <SelectsBlock>
                <Selects />
            </SelectsBlock>
        </FormWrapper>
    );
};

export default SearchForm;