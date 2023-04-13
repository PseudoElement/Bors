import { createSlice } from '@reduxjs/toolkit'
import { User } from 'shared/types/user'

export interface UserState {
  user: User | null
  authStatus: string | null
  authError: string | null
  token: string | null
  errMessage: string | null
}

const initialState: UserState = {
  user: null,
  authStatus: null,
  authError: null,
  token: null,
  errMessage: null,
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
      state.user = action.payload.data
      state.authStatus = action.payload.status
      state.authError = null
    },
    logoutUserRequested: state => {
      state.user = null
      state.token = null
      state.authStatus = null
    },
    userAuthResponse(state, action) {
      state.user = action.payload.user
      state.token = action.payload.access_token
      state.authStatus = 'success'
      state.authError = null
    },
    userUpdateResponse(state, action) {
      state.user = action.payload.user ? action.payload.user : state.user
      state.errMessage = action.payload.errorMessage
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  newUserRequested,
  logoutUserRequested,
  userMeResponse,
  userAuthResponse,
  userUpdateResponse,
} = userSlice.actions

export default userSlice.reducer
