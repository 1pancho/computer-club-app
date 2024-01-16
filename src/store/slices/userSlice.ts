import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, signInWithPopup } from "firebase/auth";
import { auth, githubProvider, googleProvider } from "../../firebaseConfig";
import { AppDispatch, RootState } from "..";
import { Notification, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';




interface IThunkApi {
    state: RootState;
    dispatch?: AppDispatch;
    rejectWithValue: string;
}

interface IInitialState {
    email: null | string,
    github: null | string,
    token: null | string,
    id: null | string,
    isLoading: boolean,
}

const initialState: IInitialState = {
    email: null,
    github: null,
    token: null,
    id: null,
    isLoading: false,
};



const setUserByEmail = createAsyncThunk<User | undefined, unknown, any>('setUserByEmail', async (thunkApi) => {
    try {
        const { user } = await signInWithPopup(auth, googleProvider);
        return user;
      } catch (error) {
        console.error('Google authentication error:', error);
      }
})



const setUserByGithub = createAsyncThunk<User | undefined, unknown, any>('setUserByGithub', async (thunkApi) => {
    try {
        const { user } = await signInWithPopup(auth, githubProvider);
        return user;
      } catch (error) {
        console.error('Github authentication error:', error);
      }
})

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        removeUser(state) {
            state.email = null;
            state.github = null;
            state.token = null;
            state.id = null;
        },
    },
    extraReducers: builder => {
        builder.addCase(setUserByEmail.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(setUserByEmail.fulfilled, (state, {payload}) => {
            state.email = payload?.email || '';
            state.id = payload?.uid || '';
            state.isLoading = false;
            console.log(payload)
        })
        builder.addCase(setUserByEmail.rejected, (state) => {
            state.isLoading = false;
        })
        builder.addCase(setUserByGithub.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(setUserByGithub.fulfilled, (state, {payload}) => {
            state.github = payload?.displayName || '';
            state.id = payload?.uid || '';
            state.isLoading = false;
            console.log(payload)
            Notification({
                icon: payload,
                color: "teal",
                title: "All good!",
                mt: "md",
            });
        })
    }
})

export const { removeUser } = userSlice.actions;
export default userSlice.reducer;
export const authThunk = {setUserByEmail, setUserByGithub}


//Переделать под thunk
//rejectWithValue
//react-toastify