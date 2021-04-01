import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
// import types from './types';

// const addContact = ( { name, number } ) => ({
//     type: types.ADD,
//     payload: {
//         id: uuidv4(),
//         name,
//         number,
//     }
// });

const addContact = createAction('phonebook/add', ({ name, number }) => ({
        payload: {
            id: uuidv4(),
            name,
            number,
    },
}));

// const deleteContact = (contactID) => (
//     {
//         type: types.DELETE,
//         payload: contactID,
//     }
// );

const deleteContact = createAction('phonebook/delete');

// const changeFilter = (value) => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// });

const changeFilter = createAction('phonebook/changeFilter');
// eslint-disable-next-line
export default { addContact, deleteContact, changeFilter };