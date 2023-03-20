import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

export type CategoriesType = {
    id: string,
    text: 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry'
    value: 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry'
};
export type CategoriesArrayType = CategoriesType[];
// type InitialStateType = [{
//     id: string,
//     text: string,
//     value: string
// }];

const categories: CategoriesArrayType = [
    {
        id: v4(),
        text: 'all',
        value: 'all',
    },
    {
        id: v4(),
        text: 'art',
        value: 'art',
    },
    {
        id: v4(),
        text: 'biography',
        value: 'biography',
    },
    {
        id: v4(),
        text: 'computers',
        value: 'computers',
    },
    {
        id: v4(),
        text: 'history',
        value: 'history',
    },
    {
        id: v4(),
        text: 'medical',
        value: 'medical',
    },
    {
        id: v4(),
        text: 'poetry',
        value: 'poetry',
    },
];
// const initialState: InitialStateType = [{
//     id: v4(),
//     text: 'all',
//     value: 'all'
// }];

const selectSlice = createSlice({
    name: 'select',
    initialState: categories,
    reducers: {
        select: (state, action) => {
            return {...state,
                categories:
                    {id: action.payload.id, text: action.payload.text, value: action.payload.value}
            }
        },
    }});

export const { select } = selectSlice.actions;
export default selectSlice.reducer;