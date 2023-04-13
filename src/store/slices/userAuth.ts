import { createSlice } from '@reduxjs/toolkit'
import { User } from 'shared/types/user'

interface AuthState {
  user: User | null
}

const initialState: AuthState = {
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    updateUserHash: (state, action) => {
      const user: AuthState = state.user || {}
      user.hash = action.payload
      state.user = user
    },
  },
})

export const { setUser, updateUserHash } = authSlice.actions

export const selectUser = (state: { auth: AuthState }) => state.auth.user

export default authSlice.reducer
