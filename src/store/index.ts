import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import userSlice from './slices/userSlice'
import stockSlice from './slices/stockSlice'

export const store = configureStore({
  reducer: { user: userSlice, stock: stockSlice },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
