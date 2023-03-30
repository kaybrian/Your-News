import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './features/newsFeedSlice';

export const store = configureStore({
    reducer: {
        news:newsReducer
    },
})
