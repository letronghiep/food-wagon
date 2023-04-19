import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
  // middleware: getDefaultMiddleware => getDefaultMiddleware()
});

export default store;
export const persistor = persistStore(store)