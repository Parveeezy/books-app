import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch } from '../store/store';

export type BooksType = {
    id: string,
    name: string,
    category: string,
    img: string,
}

export type InitialStateType = {
    books: BooksType[]
}

const initialState: InitialStateType = {
    books: [
        {
            id: '',
            name: '',
            category: '',
            img: '',
        },
    ],
};

export const fetchBooks = () => {
    return (dispatch: AppDispatch) => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAhdyJOku9x2e3Ndjzt0oOTdJyWrW06ecc')
            .then(response => dispatch(getBooks(response.data.items)));
    }
};

const getBooksSlice = createSlice({
    name: 'getBooks',
    initialState,
    reducers: {
        getBooks: (state, action) => {
            state.books = action.payload
        }
    },
});

export const { getBooks } = getBooksSlice.actions;
export const getBooksReducer = getBooksSlice.reducer;