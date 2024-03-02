import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: []
}

const setCategoriesSlice = createSlice({
        name: 'setCategories',
        initialState,
        reducers: () => ({
            setCategories: (state: any, action) => {
                try {
                    return {
                        ...state, books: [...state.books].filter((el:any) => {
                            return el.category !== action.payload.el;
                        })
                    }
                }
                catch (error: any) {
                    console.log(error);
                    return state
                }
            },
        }),
    },
);

export const { setCategories } = setCategoriesSlice.actions;
export const setCategoriesReducer = setCategoriesSlice.reducer;