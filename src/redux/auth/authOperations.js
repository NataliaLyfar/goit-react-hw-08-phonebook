import axios from 'constants/axiosDefaultBaseUrl';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };

const register = createAsyncThunk('auth/register', async (userData, {rejectWithValue}) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(`This didn't work. Try again! ${error}`);
      const errorData = error.response;
      if (!errorData) {
        throw error;
      };
      if (errorData.status === 400) {
        return rejectWithValue('Error creating user!');
      };
      if (errorData.status === 404) {
        return rejectWithValue('Сonnection error 404!');
      };
      if (errorData.status === 500) {
        return rejectWithValue('Server error!');
      };
      return rejectWithValue('Unknown error!');
  };   
  });
  

const logIn = createAsyncThunk('auth/login', async (userData, {rejectWithValue}) => {
    try {
        const { data } = await axios.post('/users/login', userData);
        token.set(data.token);
        return data;
    } catch (error) {
      toast.error(`This didn't work. Something went wrong! Try again! ${error}`);
      const errorData = error.response;
      if (!errorData) {
        throw error;
      };
      if (errorData.status === 400) {
        return rejectWithValue('Error creating user!');
      };
      if (errorData.status === 404) {
        return rejectWithValue('Сonnection error 404!');
      };
      if (errorData.status === 500) {
        return rejectWithValue('Server error!');
      };
      return rejectWithValue('Unknown error!');
    }
});

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (error) {
      toast.error(`This didn't work. Something went wrong! Try again! ${error}`);
      const errorData = error.response;
      if (!errorData) {
        throw error;
      }
      if (errorData.status === 401) {
        return thunkAPI.rejectWithValue(
          'There is no header with authorization token!!!'
        );
      }
      if (errorData.status === 404) {
        return thunkAPI.rejectWithValue('Сonnection error 404!!!');
      }
      if (errorData.status === 500) {
        return thunkAPI.rejectWithValue('Server error!!!');
      }
      return thunkAPI.rejectWithValue('Unknown error!!!');
    }   
});

const getCurrentUser = createAsyncThunk('auth/getCurrentUser', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if(!persistedToken) {
        return thunkAPI.rejectWithValue();
    };
    token.set(persistedToken);
    try {
        const { data } = await axios.get('/users/current');
        return data;
    } catch (error) {
      toast.error(`This didn't work. Something went wrong! Try again! ${error}`)
      thunkAPI.rejectWithValue(error.response.data)
    }
});

const authOperations = {
    register,
    logIn,
    logOut,
    getCurrentUser,
};
export default authOperations;