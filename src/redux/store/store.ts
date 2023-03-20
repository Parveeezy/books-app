import { configureStore } from '@reduxjs/toolkit'
import selectSlice from '../selectSlice/selectSlice';

export const store = configureStore({
    reducer: {
        select: selectSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch