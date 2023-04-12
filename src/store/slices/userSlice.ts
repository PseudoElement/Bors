import { createSlice } from '@reduxjs/toolkit'
import { UserAuthResponse } from 'shared/types/user'

export interface UserState {
  user: UserAuthResponse | null
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
    userMeResponse(state, action) {
      state.user = action.payload.user
      state.token = action.payload.token
      state.authStatus = action.payload.authStatus
      state.authError = action.payload.authError
    },
    logoutUserRequested: (state) => {
      state.user = null
      state.token = null
      state.authStatus = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { newUserRequested, logoutUserRequested, userMeResponse } = userSlice.actions

export default userSlice.reducer
