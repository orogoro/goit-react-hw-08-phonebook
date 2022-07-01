import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { deleteContact, changeFilter, addContact } from './actions';
import { options } from '../../components/config/data';

// const nameReducer = createReducer('', {
//   [nameValue]: (_, { payload }) => payload,
// });
// const numberReducer = createReducer('', {
//   [numberValue]: (_, { payload }) => payload,
// });

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
      return [payload, ...state];
    },
    [deleteContact]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  }
);
const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

// const formReducer = combineReducers({
//   name: nameReducer,
//   number: numberReducer,
// });

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export { phonebookReducer };
