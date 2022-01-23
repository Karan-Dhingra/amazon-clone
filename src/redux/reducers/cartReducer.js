import { ADD_CART_FAIL, ADD_CART_REQUEST, ADD_CART_SUCCESS, CART_CREATION_FAIL, CART_CREATION_REQUEST, CART_CREATION_SUCCESS } from "../constants/cartConstant";

export const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case CART_CREATION_REQUEST:
            return { loading: true }
        case CART_CREATION_SUCCESS:
            return { loading: false, cart: action.payload }
        case CART_CREATION_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const addToCartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_CART_REQUEST:
            return { quantity: state.quantity, products: state.products, total: state.total }
        case ADD_CART_SUCCESS:
            return { quantity: action.quantity, products: action.payload, total: action.total }
        case ADD_CART_FAIL:
            return { error: action.payload }

        default:
            return state
    }
}

export const updateCartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_CART_REQUEST:
            return { updated: false }
        case ADD_CART_SUCCESS:
            return { updated: true, quantity: action.quantity, products: action.payload, total: action.total }
        case ADD_CART_FAIL:
            return { updated: false, error: action.payload }

        default:
            return state
    }
}