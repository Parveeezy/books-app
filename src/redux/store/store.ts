import { combineReducers, configureStore } from '@reduxjs/toolkit';
import selectSlice from '../selectSlice/selectSlice';
import thunk from 'redux-thunk'
import { useDispatch } from 'react-redux';


const rootStore = combineReducers({
    select: selectSlice,
});

export const store = configureStore({
    reducer: rootStore,
    // middleware: getDefaultMiddleware =>
    //     getDefaultMiddleware().concat(thunk)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// export const useTypedDispatch = () => useDispatch<AppDispatch>();