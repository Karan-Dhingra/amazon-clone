import { loginFailure, loginStart, loginSuccess } from '../slices/UserSlice'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch(loginStart())
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

        dispatch(loginSuccess(data))
        localStorage.setItem('userInfo', JSON.stringify(data))
        localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
    } catch (error) {
        dispatch(
            loginFailure(
                error.response && error.response.data.msg
                    ? error.response.data.msg
                    : error.message
            )
        )
    }
}
