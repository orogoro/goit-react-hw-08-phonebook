import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import action from './actions';

const nameReducer = createReducer('', {
  [action.nameValue]: (_, { payload }) => payload,
});
const numberReducer = createReducer('', {
  [action.numberValue]: (_, { payload }) => payload,
});

const formReducer = combineReducers({
  name: nameReducer,
  number: numberReducer,
});

export { formReducer };
