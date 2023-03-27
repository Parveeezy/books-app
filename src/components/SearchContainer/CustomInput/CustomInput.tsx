import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { CustomInpt } from './components';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store/store';
import { fetchBooks } from '../../../redux/getBooksSlice/getBooksSlice';

const CustomInput = () => {

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
        <>
            <CustomInpt value={bookName}
                        onChange={onChangeInputValue}
                        onKeyDown={onEnterHandler}
                        fullWidth
                        label='Search books...'
                        id='fullWidth' />
        </>
    );
};

export default CustomInput;