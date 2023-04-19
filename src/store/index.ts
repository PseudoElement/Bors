import { Action, configureStore, ThunkAction, combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'js-cookie'

import userSlice from './slices/userSlice'
import stockSlice from './slices/stockSlice'

const persistConfig = {
  key: 'root',
  storage: new CookieStorage(Cookies),
  whitelist: ['user']
}

const rootReducer = combineReducers({
  user: userSlice, 
  stock: stockSlice
})

const _persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
