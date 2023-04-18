import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import userSlice from './slices/userSlice'
import stockSlice from './slices/stockSlice'
import userStocksSlice from './slices/userStocksSlice'


export const store = configureStore({
  reducer: { user: userSlice, stock: stockSlice, myStocks: userStocksSlice },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
