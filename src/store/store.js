import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import logger from 'redux-logger';
const middleWares = [process.env.NODE_ENV === 'production' && logger].filter(Boolean)


export const store = configureStore({
  reducer: rootReducer,
  middleware: middleWares,
});
