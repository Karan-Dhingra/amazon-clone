import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { UpdateCartAction } from './actions/cartAction'
import { addToCartReducer } from './reducers/cartReducer'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    cart: addToCartReducer,
    updateCart: UpdateCartAction
})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null
const cartInfoFromStorage = localStorage.getItem('cartInfo')
    ? JSON.parse(localStorage.getItem('cartInfo'))
    : {}
const initialState = {
    userLogin: {
        userInfo: userInfoFromStorage,
        isLogin: false,
        isAdmin: false,
    },
    cart: {
        quantity: cartInfoFromStorage.quantity,
        products: cartInfoFromStorage.products,
        total: cartInfoFromStorage.total,
    },
    updateCart: {
        updated: false,
        quantity: cartInfoFromStorage.quantity,
        products: cartInfoFromStorage.products,
        total: cartInfoFromStorage.total,
    }
}

const middleware = [thunk]

export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
