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
