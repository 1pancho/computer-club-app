import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    github: null,
    token: null,
    id: null,
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserByEmail(state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        setUserByGithub(state, action) {
            console.log(action.payload)
            state.github = action.payload;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.github = null;
            state.token = null;
            state.id = null;
        },
    },
})

export const { setUserByEmail, setUserByGithub, removeUser } = userSlice.actions;
export default userSlice.reducer;