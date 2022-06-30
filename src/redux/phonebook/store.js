// import { createStore, combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { phonebookReducer } from './reducers';

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: {
    // form: formReducer,
    phonebook: phonebookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

// const formInitialState = {
//   name: '',
//   number: '',
// };

// const formReducer = (state = formInitialState, { type, payload }) => {
//   switch (type) {
//     case 'form/name':
//       return {
//         ...state,
//         name: payload,
//       };

//     case 'form/number':
//       return {
//         ...state,
//         number: payload,
//       };

//     default:
//       return state;
//   }
// };
