import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
    id: string
}

const initialState: InitialState = {
    id: '',
};

export const getBookIdSlice = createSlice({
    name: 'getBookId',
    initialState,
    reducers: () => ({
        getId: (state, action) => {
            state.id = action.payload;
        },
    }),
});

export const { getId } = getBookIdSlice.actions;
export const getBookIdReducer = getBookIdSlice.reducer