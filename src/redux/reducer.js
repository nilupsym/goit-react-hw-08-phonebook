import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import types from './types';
import actions from './actions';

const INITIAL_STATE = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const items = (state = INITIAL_STATE, { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             const isInList = state.find(
//                 newContact => newContact.name.toLowerCase() === payload.name.toLowerCase()
//             );
//             if (isInList) {
//                 alert(`Contact ${payload.name} is already exist`);
//                 return state;
//             }
//             return [...state, payload];
        
//         case types.DELETE:
//             return state.filter(({ id }) => id !== payload);
            
//         default:
//             return state;
//     }
// };

const items = createReducer(INITIAL_STATE, {
    [actions.addContact]: (state, { payload }) => {
        const isInList = state.find(
                newContact => newContact.name.toLowerCase() === payload.name.toLowerCase()
            );
            if (isInList) {
                alert(`Contact ${payload.name} is already exist`);
                return state;
            }
            return [...state, payload];
    },
    [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.CHANGE_FILTER:
//             return payload;
            
//         default:
//             return state;
//     }
// };

const filter = createReducer('', { [actions.changeFilter]: (_, { payload }) => payload });

export default combineReducers({
    items,
    filter
});