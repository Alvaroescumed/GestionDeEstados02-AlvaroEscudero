import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";

//Configuramos la store 
export const store = configureStore({
    reducer:{
        user: userReducer,
    },
});