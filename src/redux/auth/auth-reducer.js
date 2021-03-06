import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logOutUser,
  fetchCurrentUser,
} from './auth-operations';

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer(initialUserState, {
  [registerUser.fulfilled]: (_, { payload }) => {
    return payload.user;
  },
  [loginUser.fulfilled]: (_, { payload }) => {
    return payload.user;
  },
  [logOutUser.fulfilled]: () => {
    return initialUserState;
  },
  [fetchCurrentUser.fulfilled]: (_, { payload }) => {
    return payload;
  },
});

const token = createReducer(null, {
  [registerUser.fulfilled]: (_, { payload }) => {
    return payload.token;
  },
  [loginUser.fulfilled]: (_, { payload }) => {
    return payload.token;
  },
  [logOutUser.fulfilled]: () => {
    return null;
  },
});

const isLoggedIn = createReducer(false, {
  [registerUser.fulfilled]: () => true,
  [loginUser.fulfilled]: () => true,
  [logOutUser.fulfilled]: () => false,
  [fetchCurrentUser.fulfilled]: () => true,
});

const сurrentUser = createReducer(false, {
  [fetchCurrentUser.pending]: () => true,
  [fetchCurrentUser.fulfilled]: () => false,
  [fetchCurrentUser.rejected]: () => false,
});

const loader = createReducer(false, {
  [loginUser.pending]: () => true,
  [loginUser.fulfilled]: () => false,
  [loginUser.rejected]: () => false,

  [registerUser.pending]: () => true,
  [registerUser.fulfilled]: () => false,
  [registerUser.rejected]: () => false,
});

const authReducer = combineReducers({
  user,
  token,
  isLoggedIn,
  сurrentUser,
  loader,
});

export { authReducer };
