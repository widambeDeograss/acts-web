import authReducer from "./AuthSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        auth: authReducer,
    },
    devTools:true
})