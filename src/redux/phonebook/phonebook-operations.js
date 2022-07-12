import axios from 'axios';
import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://62c2bf3d876c4700f52d250d.mockapi.io';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contact/fechContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/contactDelete',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      Notiflix.Notify.success('Контакт успешно удален');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/contactAdd',
  async ({ name, phone }, { rejectWithValue }) => {
    const contact = {
      name,
      phone,
    };

    try {
      const { data } = await axios.post('/contacts', contact);
      Notiflix.Notify.success('Контакт успешно добавлен');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactRequest());
//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactError(error));
//   }
// };
