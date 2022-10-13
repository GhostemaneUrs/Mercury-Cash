import rootReducer from './rootReducer'
import storage from 'redux-persist/lib/storage'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import persistReducer from 'redux-persist/es/persistReducer'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['users'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: true,
})

export const persistor = persistStore(store)
