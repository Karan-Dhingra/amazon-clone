import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    loading: false,
    isLogin: false,
    isAdmin: false,
    error: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true
            state.isLogin = false
            state.isAdmin = false
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.isLogin = true
            state.isAdmin = action.payload.isAdmin
            state.currentUser = action.payload
        },
        loginFailure: (state, action) => {
            state.loading = false
            state.isLogin = false
            state.isAdmin = false
            state.error = action.payload
        },
    },
})

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions
export default userSlice.reducer
