import {
    EMAIL_VERIFICATION_FAIL,
    EMAIL_VERIFICATION_REQUEST,
    EMAIL_VERIFICATION_SUCCESS,
    FORGET_PASSWORD_FAIL,
    FORGET_PASSWORD_REQUEST,
    FORGET_PASSWORD_SUCCESS,
    METAMASK_LOGIN_FAIL,
    METAMASK_LOGIN_REQUEST,
    METAMASK_LOGIN_SUCCESS,
    PASSWORD_CHANGED_VERIFICATION_FAIL,
    PASSWORD_CHANGED_VERIFICATION_REQUEST,
    PASSWORD_CHANGED_VERIFICATION_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
} from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true, isLogin: false }
        case USER_LOGIN_SUCCESS:
            return { loading: false, isLogin: true, userInfo: action.payload }
        case USER_LOGIN_FAIL:
            return { loading: false, isLogin: false, error: action.payload }
        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                loading: true,
                isRegister: false,
                emailVerificationRequest: true,
            }
        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                isRegister: true,
                userInfo: action.payload,
                emailVerificationRequest: true,
            }
        case USER_REGISTER_FAIL:
            return {
                loading: false,
                isRegister: false,
                error: action.payload,
                emailVerificationRequest: false,
            }
        default:
            return state
    }
}

export const verifyEmailReducer = (state = {}, action) => {
    switch (action.type) {
        case EMAIL_VERIFICATION_REQUEST:
            return {
                loading: true,
                isEmailVerified: false,
                verifyEmailPopup: true,
            }
        case EMAIL_VERIFICATION_SUCCESS:
            return {
                loading: false,
                isEmailVerified: true,
                userInfo: action.payload,
                verifyEmailPopup: true,
            }
        case EMAIL_VERIFICATION_FAIL:
            return {
                loading: false,
                isEmailVerified: false,
                error: action.payload,
                verifyEmailPopup: true,
            }
        default:
            return state
    }
}

export const forgetPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case FORGET_PASSWORD_REQUEST:
            return {
                loading: true,
                forgetPasswordRequest: false,
                emailVerificationRequest: true,
                forgetPasswordPopup: true,
            }
        case FORGET_PASSWORD_SUCCESS:
            return {
                loading: false,
                forgetPasswordRequest: true,
                userInfo: action.payload,
                emailVerificationRequest: true,
                forgetPasswordPopup: true,
            }
        case FORGET_PASSWORD_FAIL:
            return {
                loading: false,
                forgetPasswordRequest: false,
                error: action.payload,
                emailVerificationRequest: false,
                forgetPasswordPopup: false,
            }
        default:
            return state
    }
}

export const resetPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case PASSWORD_CHANGED_VERIFICATION_REQUEST:
            return {
                loading: true,
                isPasswordChanged: false,
                resetPopup: true,
            }
        case PASSWORD_CHANGED_VERIFICATION_SUCCESS:
            return {
                loading: false,
                isPasswordChanged: true,
                userInfo: action.payload,
                resetPopup: true,
            }
        case PASSWORD_CHANGED_VERIFICATION_FAIL:
            return {
                loading: false,
                isPasswordChanged: false,
                error: action.payload,
                resetPopup: false,
            }
        default:
            return state
    }
}

