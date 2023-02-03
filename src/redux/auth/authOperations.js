import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
};

const register = createAsyncThunk(
    'auth/register',
    async (Credential, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', Credential);
            token.set(data.token);
            return data;
        } catch (error) {
            error.message =
                "Please try again! Can't register a new user with this name and email!";
            return rejectWithValue(error.message);
        }
    }
);

const logIn = createAsyncThunk(
    'auth/logIn',
    async (Credential, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', Credential);
            token.set(data.token);
            return data;
        } catch (error) {
            error.message =
                "Sorry, your name or password is incorrect! Try again!";
            return rejectWithValue(error.message);
        }
    }
);

const logOut = createAsyncThunk(
    'auth/logout',
    async () => {
        try {
            await axios.post('/users/logout');
            token.unset();
            // return data;
            return;
            // clearAuthHeader();


        } catch (error) {
            console.log('logOut :', error.message);
        }
    }
);

const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkApi) => {
        const state = thunkApi.getState();
        const persistedToken = state.auth.token;
        if (persistedToken === null) {
            return thunkApi.rejectWithValue();
        }
        token.set(persistedToken);
        try {
            const { data } = await axios.get('/user/current');
            return data;
        } catch (error) {
            error.message = 'Something went wrong! Please logIn or Register!'
            return thunkApi.rejectWithValue(error.message);

        }
    }
);


const operations = { register, logIn, logOut, fetchCurrentUser };
export default operations;