import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, signInWithPopup } from "firebase/auth";
import { auth, db, githubProvider, googleProvider } from "../../firebaseConfig";
// import { AppDispatch, RootState } from "..";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import { AppDispatch, RootState } from "store";


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





const setUserByEmail = createAsyncThunk<User | undefined, unknown, any>('setUserByEmail', async (_, thunkApi) => {
    try {
        const { user } = await signInWithPopup(auth, googleProvider);
        const userDocRef = doc(collection(db, 'users'), user.uid);

        // Проверяем, существует ли пользователь с заданным user.uid
        const docSnapshot = await getDoc(userDocRef);
        
        if (docSnapshot.exists()) {
            // Пользователь уже существует в базе данных
            return user;
        } else {
          await setDoc(userDocRef, {
            email: user.email,
            displayName: user.displayName,
          });
          
          return user;
        }
      } catch (error) {
         toast.error('Something went wrong');
      }
})



const setUserByGithub = createAsyncThunk<User | undefined, unknown, any>('setUserByGithub', async (_, thunkApi) => {
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
        logout(state) {
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
            toast("Successful!")
        })
        builder.addCase(setUserByEmail.rejected, (state) => {
            state.isLoading = false;
            toast.error('Something went wrong');
        })



        builder.addCase(setUserByGithub.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(setUserByGithub.fulfilled, (state, {payload}) => {
            state.github = payload?.displayName || '';
            state.id = payload?.uid || '';
            state.isLoading = false;
            console.log(payload)
            toast.success('Successful');

        })
    }
})

export const { logout } = userSlice.actions;
export default userSlice.reducer;
export const authThunk = {setUserByEmail, setUserByGithub}
