import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
} from './phonebook-operations';
import { changeFilter } from './phonebook-actions';

const contactsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => {
    return payload;
  },
  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
  [addContact.fulfilled]: (state, { payload }) => {
    return [...state, payload];
  },
});

const isLoading = createReducer(false, {
  // [fetchContacts.pending]: () => true,
  // [fetchContacts.fulfilled]: () => false,
  // [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  contactsReducer,
  isLoading,
  error,

  filter: filterReducer,
});

export { phonebookReducer };
