import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

export type ValuesTypeAndText = 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry';

export type CategoriesType = {
    id: string,
    text: ValuesTypeAndText
    value: ValuesTypeAndText
};
export type CategoriesArrayType = CategoriesType[];
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


const selectSlice = createSlice({
    name: 'select',
    initialState: categories,
    reducers: {
        select: (state, action) => {
            return {...state};
        },
    },
});

export const { select } = selectSlice.actions;
export default selectSlice.reducer;