import axios from 'axios'
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    EMAIL_VERIFICATION_REQUEST,
    EMAIL_VERIFICATION_SUCCESS,
    EMAIL_VERIFICATION_FAIL,
    FORGET_PASSWORD_REQUEST,
    FORGET_PASSWORD_SUCCESS,
    FORGET_PASSWORD_FAIL,
    PASSWORD_CHANGED_VERIFICATION_SUCCESS,
    PASSWORD_CHANGED_VERIFICATION_REQUEST,
    PASSWORD_CHANGED_VERIFICATION_FAIL,
} from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const config = {
            headers: {
                'content-type': 'application/json',
            },
        }

        const { data } = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
            { email, password },
            config
        )
        // console.log(data)
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))
        localStorage.setItem('token', JSON.stringify(data.accessToken))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.message,
        })
    }
}

export const logout = () => async (dispatch) => {
    const userAccessToken = localStorage.getItem('token')
        ? JSON.parse(localStorage.getItem('token'))
        : null
    const token = userAccessToken
    // console.log('Token: ' + token)
    localStorage.removeItem('userInfo')
    localStorage.removeItem('metamaskInfo')
    localStorage.removeItem('token')
    dispatch({ type: USER_LOGOUT })
    const config = {
        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer ' + token,
        },
    }

    await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/logout`,
        { token },
        config
    )
    // console.log('userActionReducer, Logout:' + data)
}

export const register =
    (username,mobileNumber, email, password, confirmPassword, walletKey) =>
    async (dispatch) => {
        try {
            dispatch({ type: USER_REGISTER_REQUEST })
            const config = {
                headers: {
                    'content-type': 'application/json',
                },
            }
            const { data } = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/auth/register`,
                { username, email, password, confirmPassword, walletKey },
                config
            )
            // console.log(data)
            dispatch({ type: USER_REGISTER_SUCCESS, payload: data })
            // localStorage.setItem('userInfo', JSON.stringify(data))
        } catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload:
                    error.response && error.response.data.msg
                        ? error.response.data.msg
                        : error.message,
            })
        }
    }

export const verifyEmailID = (email, token) => async (dispatch) => {
    try {
        dispatch({ type: EMAIL_VERIFICATION_REQUEST })
        const { data } = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/auth/verify-email`,
            { params: { email: email, token: token } }
        )
        // console.log(data)
        dispatch({ type: EMAIL_VERIFICATION_SUCCESS, payload: data })
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: EMAIL_VERIFICATION_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.message,
        })
    }
}

export const forgetPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: FORGET_PASSWORD_REQUEST })
        const config = {
            headers: {
                'content-type': 'application/json',
            },
        }
        const { data } = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/auth/forgot-password`,
            { email },
            config
        )
        // console.log(data)
        dispatch({ type: FORGET_PASSWORD_SUCCESS, payload: data })
        // localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: FORGET_PASSWORD_FAIL,
            payload:
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.message,
        })
    }
}

export const resetPasswordEmail =
    (token, email, password) => async (dispatch) => {
        try {
            dispatch({ type: PASSWORD_CHANGED_VERIFICATION_REQUEST })
            const config = {
                headers: {
                    'content-type': 'application/json',
                },
            }
            const { data } = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/auth/reset-password`,
                { token, email, password },
                config
            )
            // console.log(data)
            dispatch({
                type: PASSWORD_CHANGED_VERIFICATION_SUCCESS,
                payload: data,
            })
            // dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
            // localStorage.setItem('userInfo', JSON.stringify(data))
        } catch (error) {
            dispatch({
                type: PASSWORD_CHANGED_VERIFICATION_FAIL,
                payload:
                    error.response && error.response.data.msg
                        ? error.response.data.msg
                        : error.message,
            })
        }
    }

