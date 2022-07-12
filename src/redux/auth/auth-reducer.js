import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { registerUser, loginUser, logOutUser } from './auth-operations';

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
});

// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, { payload }) => payload,
//   [fetchContacts.pending]: () => null,
// });

const authReducer = combineReducers({
  user,
  token,
  isLoggedIn,
});

export { authReducer };
