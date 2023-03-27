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
    books: [],
};

export const fetchBooks = (bookName:string = 'JavaScript') => {
    return (dispatch: AppDispatch) => {
        try {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&maxResults=40&key=AIzaSyAhdyJOku9x2e3Ndjzt0oOTdJyWrW06ecc`)
                .then(response => dispatch(getBooks(response.data.items)));
        } catch (e) {
            console.log(e);
            dispatch(getBooks({books: []}))
        }
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