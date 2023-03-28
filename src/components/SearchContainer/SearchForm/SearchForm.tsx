import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FormTitle, FormWrapper, SearchBlock, SelectsBlock } from './components';
import CustomInput from '../CustomInput/CustomInput';
import CustomBtn from '../CustomBtn/CustomBtn';
import Selects from '../Selects/Selects';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store/store';
import { fetchBooks } from '../../../redux/getBooksSlice/getBooksSlice';

const SearchForm = () => {

    const [bookName, setBookName] = useState<string>('');

    const dispatch = useDispatch<AppDispatch>();

    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && dispatch(fetchBooks(bookName));
        e.key === 'Enter' && setBookName('');
    };

    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setBookName(e.currentTarget.value);
    };

    return (
        <FormWrapper>
            <FormTitle>Search books</FormTitle>
            <SearchBlock>
                <CustomInput
                    value={bookName}
                    onChangeValue={onChangeInputValue}
                    onKeyDownHandler={onEnterHandler}
                />
                <CustomBtn/>
            </SearchBlock>
            <SelectsBlock>
                <Selects />
            </SelectsBlock>
        </FormWrapper>
    );
};

export default SearchForm;