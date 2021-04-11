import { configureStore, getDefaultMiddleware, } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import reducer from './reducer';
import authReducer from './auth/auth-reducer';

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }), logger];

const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: reducer,
},
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export default store;