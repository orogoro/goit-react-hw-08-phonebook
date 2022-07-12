// import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authAPI from '../../axiosAPI/authAPI';

const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userDate, { rejectWithValue }) => {
    try {
      const response = await authAPI.register(userDate);
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
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export { registerUser, loginUser };

// export const deleteContact = createAsyncThunk(
//   'user/contactDelete',
//   async (id, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.delete(`/contacts/${id}`);
//       Notiflix.Notify.success('Контакт успешно удален');
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'user/contactAdd',
//   async ({ name, phone }, { rejectWithValue }) => {
//     const contact = {
//       name,
//       phone,
//     };

//     try {
//       const { data } = await axios.post('/contacts', contact);
//       Notiflix.Notify.success('Контакт успешно добавлен');
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
