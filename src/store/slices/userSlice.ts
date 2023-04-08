import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../shared/types/user'

export interface UserState {
  user: User | null
  authStatus: string | null
  authError: string | null
  token: string | null
}

const initialState: UserState = {
  user: null,
  authStatus: null,
  authError: null,
  token: null,
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    newUserRequested: (state, action) => {
      state.user = action.payload.data.user
      state.token = action.payload.data.access_token
      state.authStatus = action.payload.status
    },
  },
})

// Action creators are generated for each case reducer function
export const { newUserRequested } = userSlice.actions

export default userSlice.reducer
