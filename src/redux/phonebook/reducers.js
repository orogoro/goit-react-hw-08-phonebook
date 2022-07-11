import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';
import { changeFilter } from './actions';

const contactsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => {
    return payload;
  },
  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload.id);
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

// const contactsReducer = createReducer(
//   JSON.parse(window.localStorage.getItem('contacts')) ?? options,
//   {
//     [addContact]: (state, { payload }) => {
//       const lowerName = payload.name.toLowerCase();
//       const contactName = state.some(
//         contact => contact.name.toLowerCase() === lowerName
//       );

//       if (contactName) {
//         alert(`${lowerName} is already in contacts`);
//         return;
//       }
//       window.localStorage.setItem(
//         'contacts',
//         JSON.stringify([payload, ...state])
//       );
//       return [payload, ...state];
//     },
//     [deleteContact]: (state, { payload }) => {
//       const stateFilter = state.filter(({ id }) => id !== payload);
//       window.localStorage.setItem('contacts', JSON.stringify(stateFilter));
//       return stateFilter;
//     },
//   }
// );
