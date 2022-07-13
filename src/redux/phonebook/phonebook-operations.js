import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsAPI } from 'axiosAPI';

export const fetchContacts = createAsyncThunk(
  'contact/fechContact',
  async (_, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.contacts();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/contactDelete',
  async (id, { rejectWithValue }) => {
    try {
      await contactsAPI.deleteContact(id);
      Notiflix.Notify.success('Контакт успешно удален');
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/contactAdd',
  async ({ name, number }, { rejectWithValue }) => {
    const contact = {
      name,
      number,
    };

    try {
      const response = await contactsAPI.createContact(contact);
      Notiflix.Notify.success('Контакт успешно добавлен');
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
