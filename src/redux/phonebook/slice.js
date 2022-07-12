import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from './phonebook-operations';
import Notiflix from 'notiflix';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts = action.payload;
    },

    [deleteContact.fulfilled]: (state, action) => {
      console.log(state);
      Notiflix.Notify.success('Контакт успешно удален');
      state.contacts.filter(({ id }) => id !== action.payload.id);
    },

    [addContact.fulfilled]: (state, action) => {
      const lowerName = action.payload.name.toLowerCase();
      const contactName = state.contacts.some(
        contact => contact.name.toLowerCase() === lowerName
      );

      if (contactName) {
        Notiflix.Notify.failure(`${lowerName} уже есть в списке контактов`);
        return;
      }

      Notiflix.Notify.success('Контакт успешно добавлен');
      return (state.contacts = [...state.contacts, action.payload]);
    },

    // [fetchContacts.pending]: state => (state.isLoading = true),
    [addContact.pending]: state => (state.isLoading = true),
    [deleteContact.pending]: state => (state.isLoading = true),
  },
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
