import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { phonebookReducer } from './reducers';
// import contactsSlice from './slice';

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
