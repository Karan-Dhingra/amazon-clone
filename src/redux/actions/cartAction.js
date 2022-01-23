import {
    ADD_CART_FAIL,
    ADD_CART_REQUEST,
    ADD_CART_SUCCESS,
    UPDATE_CART_FAIL,
    UPDATE_CART_REQUEST,
    UPDATE_CART_SUCCESS,
} from '../constants/cartConstant'

const findProduct = (products, id) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i]._id === id) {
            return i
        }
    }
    return -1
}

export const createCartAction = () => async (dispatch) => {}

export const addToCartAction = (quantity, product) => async (dispatch) => {
    try {
        dispatch({ type: ADD_CART_REQUEST })
        const CartData = JSON.parse(localStorage.getItem('cartInfo'))
        let products = CartData ? CartData.products : []
        let total = CartData ? CartData.total : 0

        // Find Product
        let index = findProduct(products, product._id)
        if (index === -1) {
            // Add Product
            product['qty'] = quantity
            products.push(product)
        } else {
            products[index]['qty'] = quantity + products[index]['qty']
        }

        total += quantity * product.price

        console.log('Added Product: ', products)
        dispatch({
            type: ADD_CART_SUCCESS,
            payload: products,
            quantity: products.length,
            total: total,
        })
        localStorage.setItem(
            'cartInfo',
            JSON.stringify({
                products: products,
                quantity: products.length,
                total: total,
            })
        )
    } catch (error) {
        console.log('ERROR: ' + error)
        dispatch({
            type: ADD_CART_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.message,
        })
    }
}

export const UpdateCartAction = (id) => async (dispatch) => {
    // products = 5
    try {
        dispatch({ type: ADD_CART_REQUEST })
        const CartData = JSON.parse(localStorage.getItem('cartInfo'))
        let products = CartData ? CartData.products : []
        let total = CartData ? CartData.total : 0

        let index = findProduct(products, id)
        if (index !== -1) {
            // console.log('Prev price', products[index].price);
            // console.log(index)
            // console.log('Total Price PREV', total);
            total -= products[index].price
            // console.log('Total Price', total);
            products = products.filter((value) => {
                return value._id !== id
            })
        }

        if (products.length === 0) {
            total = 0
        }

        // console.log(products);
        console.log('Deleted Product: ', products)
        // total += quantity * product.price
        dispatch({
            type: ADD_CART_SUCCESS,
            payload: products,
            quantity: products.length,
            total: total,
        })
        // localStorage.removeItem('cartInfo')
        localStorage.setItem(
            'cartInfo',
            JSON.stringify({
                products: products,
                quantity: products.length,
                total: total,
            })
        )
        if (products.length === 0) {
            localStorage.removeItem('cartInfo')
            // total = 0
        }
    } catch (error) {
        dispatch({ type: ADD_CART_FAIL, payload: error })
        console.log(error)
    }
}
