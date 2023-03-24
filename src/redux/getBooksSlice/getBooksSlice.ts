import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

type BooksType = {
    id: string,
    name: string,
    category: string,
    img: string,
}

type InitialStateType = {
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

const getBooksSlice = createSlice({
    name: 'getBooks',
    initialState,
    reducers: {
        getBooks: (state, action) => {
            state.books = action.payload
        },
    },
});

export const { getBooks } = getBooksSlice.actions;
export const getBooksReducer = getBooksSlice.reducer;