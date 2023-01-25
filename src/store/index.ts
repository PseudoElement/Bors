import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import counter from './slices/counter'

export const store = configureStore({
  reducer: { counter: counter },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
