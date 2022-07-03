import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { deleteContact, changeFilter, addContact } from './actions';
import { options } from '../../config/data';

const contactsReducer = createReducer(
  JSON.parse(window.localStorage.getItem('contacts')) ?? options,
  {
    [addContact]: (state, { payload }) => {
      const lowerName = payload.name.toLowerCase();
      const contactName = state.some(
        contact => contact.name.toLowerCase() === lowerName
      );

      if (contactName) {
        alert(`${lowerName} is already in contacts`);
        return;
      }
      window.localStorage.setItem(
        'contacts',
        JSON.stringify([payload, ...state])
      );
      return [payload, ...state];
    },
    [deleteContact]: (state, { payload }) => {
      const stateFilter = state.filter(({ id }) => id !== payload);
      window.localStorage.setItem('contacts', JSON.stringify(stateFilter));
      return stateFilter;
    },
  }
);
const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export { phonebookReducer };
