import React from 'react';
import { FormTitle, FormWrapper, SearchBlock, SelectsBlock } from './components';
import CustomInput from '../CustomInput/CustomInput';
import CustomBtn from '../Btn/CustomBtn';
import Selects from '../Selects/Selects';

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