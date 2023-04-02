import React from 'react';
import { CustomButton } from './components';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store/store';
import { fetchBooks } from '../../../redux/getBooksSlice/getBooksSlice';

type CustomBtnType = {
    setBookName: (e: string) => any
    bookName: string
}

const CustomBtn = (props: CustomBtnType) => {

    const dispatch = useDispatch<AppDispatch>();

    const onButtonHandler = () => {
        dispatch(fetchBooks(props.bookName));
        props.setBookName('');
    };

    return (
        <CustomButton onClick={onButtonHandler}>
            Search
        </CustomButton>
    );
};

export default CustomBtn;