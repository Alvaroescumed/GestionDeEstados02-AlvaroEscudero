import { createSlice } from "@reduxjs/toolkit";

//creamos un estado inicial
const initialState = {
    name : null,
    username: null,
    email: "",
};

//definimos el slice
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser: (state, action) => { // reducer para actualizar el estado del usuario con los datos proporcionados
            const {name, username, email} = action.payload;
            state.name = name;
            state.username = username;
            state.email = email;
        },
        changeEmail: (state, action) => { //reducer para actualizar el mail
            state.email = action.payload;
        },
    },
});

export const {addUser, changeEmail} =userSlice.actions;
export default userSlice.reducer;