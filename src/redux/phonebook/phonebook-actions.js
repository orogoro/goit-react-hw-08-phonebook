import { createAction } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

const changeFilter = createAction('phonebook/change_filter');

export { changeFilter };

// const addContact = createAction('phonebook/add', ({ name, number }) => ({
//   payload: {
//     id: nanoid(),
//     name,
//     number,
//   },
// }));
// const deleteContact = createAction('phonebook/delete');
