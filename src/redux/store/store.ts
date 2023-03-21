import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { selectCategoriesReducer, selectSortingReducer } from '../selectSlice/selectSlice';

const rootStore = combineReducers({
    categories: selectCategoriesReducer,
    sorting: selectSortingReducer
});

export const store = configureStore({
    reducer: rootStore,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch