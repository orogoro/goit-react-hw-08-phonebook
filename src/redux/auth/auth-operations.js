import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { authAPI } from 'axiosAPI';

const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userDate, { rejectWithValue }) => {
    try {
      const response = await authAPI.register(userDate);
      if (!response) {
        Notiflix.Notify.failure('Такой пользователь уже есть');
        return rejectWithValue(response);
      }
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userDate, { rejectWithValue }) => {
    try {
      const response = await authAPI.login(userDate);
      if (!response) {
        Notiflix.Notify.failure('Такого пользователя нет');
        return rejectWithValue(response);
      }
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const logOutUser = createAsyncThunk(
  'user/logOutUser',
  async (_, { rejectWithValue }) => {
    try {
      await authAPI.logOut();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    try {
      const response = await authAPI.currentUser(persistedToken);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export { registerUser, loginUser, logOutUser, fetchCurrentUser };
