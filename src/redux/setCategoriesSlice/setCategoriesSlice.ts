import { createSlice } from '@reduxjs/toolkit';

const setCategoriesSlice = createSlice({
        name: 'setCategories',
        initialState: {
            books: [{
                id: '',
                name: '',
                category: '',
                img: '',
            }],
        },
        reducers: {
            setCategories: (state, action) => {
                state.books = action.payload.books.filter((el: any) =>
                    el.category !== action.payload.el);
            },
        },
    },
);

export const { setCategories } = setCategoriesSlice.actions;
export const setCategoriesReducer = setCategoriesSlice.reducer;