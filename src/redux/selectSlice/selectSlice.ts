import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

export type ValuesAndTextType = 'all' | 'art' | 'biography' | 'computers' | 'history' | 'medical' | 'poetry';
export type CategoriesType = {
    id: string,
    text: ValuesAndTextType
    value: ValuesAndTextType
};
export type CategoriesArrayType = CategoriesType[];

export type SortingTextAndValueType = 'relevance' | 'newest';
export type SortingType = {
    id: string,
    text: SortingTextAndValueType,
    value: SortingTextAndValueType
}
export type SortingArrayType = SortingType[]

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
const sorting: SortingArrayType = [
    {
        id: v4(),
        text: 'relevance',
        value: 'relevance',
    },
    {
        id: v4(),
        text: 'newest',
        value: 'newest'
    }
];
const selectCategoriesSlice = createSlice({
    name: 'selectCategories',
    initialState: categories,
    reducers: {
        selectCategories: (state, action) => {
            return [...state];
        },
    },
});

const selectSortingSlice = createSlice({
    name: 'selectSorting',
    initialState: sorting,
    reducers: {
        selectSorting: (state, action) => {
            return [...state];
        },
    },
});

export const { selectCategories } = selectCategoriesSlice.actions;
const selectCategoriesReducer = selectCategoriesSlice.reducer;

export const { selectSorting } = selectSortingSlice.actions;
const selectSortingReducer = selectSortingSlice.reducer;

export {selectCategoriesReducer, selectSortingReducer};