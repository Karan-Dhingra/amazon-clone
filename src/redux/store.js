import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/UserSlice'
import cartReducer from './slices/CartSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
    },
})
