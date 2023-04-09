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
                console.log(state);
                console.log(action.payload);
                try {
                    state.books = action.payload.books.filter((el: any) => {
                        console.log(el.category);
                        return el.category !== action.payload.books.volumeInfo.categories;
                    });
                } catch (error) {
                    console.log(error);
                    return state
                }
            },
        },
    },
);

export const { setCategories } = setCategoriesSlice.actions;
export const setCategoriesReducer = setCategoriesSlice.reducer;