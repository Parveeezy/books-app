import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { selectCategoriesReducer, selectSortingReducer } from '../selectSlice/selectSlice';
import { getBooksReducer } from '../getBooksSlice/getBooksSlice';

const rootStore = combineReducers({
    categories: selectCategoriesReducer,
    sorting: selectSortingReducer,
    books: getBooksReducer
});

export const store = configureStore({
    reducer: rootStore,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;