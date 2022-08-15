import { configureStore } from "@reduxjs/toolkit";
import baskeReducer from './features/basketsSlice';

export const store = configureStore({
    reducer:{
        basket:baskeReducer
    }
})