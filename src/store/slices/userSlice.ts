import { createSlice } from '@reduxjs/toolkit'
import { UserShort } from '../../shared/types/user'

export interface UserState {
  user: UserShort | null
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

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    newUserRequested: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.authStatus = action.payload.authStatus
      state.authError = action.payload.authError
    },
  },
})

// Action creators are generated for each case reducer function
export const { newUserRequested } = userSlice.actions

export default userSlice.reducer
