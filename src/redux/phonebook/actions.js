import { createAction } from '@reduxjs/toolkit';
// import actionTypes from './types';

const nameValue = createAction('form/name');
const numberValue = createAction('form/number');

export default { nameValue, numberValue };

// export const nameValue = value => ({
//   type: actionTypes.NAME,
//   payload: value,
// });

// export const numberValue = value => ({
//   type: actionTypes.NUMBER,
//   payload: value,
// });
