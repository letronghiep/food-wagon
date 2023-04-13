import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { loadFromLocalStorage, saveToLocalStorage } from '../middleware/localStorage';
import logger from 'redux-logger';
import { localStorageMiddleware } from '../middleware/localStorageMiddleware';

// const middleWares = [process.env.NODE_ENV === 'production' && logger].filter(Boolean)

const persistedState = loadFromLocalStorage();


const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware)
});

store.subscribe(() => {
  saveToLocalStorage(store.getState())
})

export default store;