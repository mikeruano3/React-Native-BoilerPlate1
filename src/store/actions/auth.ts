import { AppThunk } from "../index"
import { FetchError } from '../../dataDefinitions/fetchError'
import * as actionTypes from './actionTypes'
import axios from '../../axios/axios-general'

const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

const authSuccess = (
    token: string | null,
    refreshToken: string | null,
    userId: string | null,
) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        payload: {
            token,
            refreshToken,
            userId,
        }
    }
}

const authFail = (error: FetchError) => {
    return {
        type: actionTypes.AUTH_FAILED,
        payload: {
            error: error
        }
    }
}

export const authReset = () => {
    return {
        type: actionTypes.AUTH_INIT
    }
}

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const auth = (email: string, password: string): AppThunk<any> => async dispatch => {
    dispatch(authStart())
    const authData = {
        email,
        password,
        returnSecureToken: true
    }
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAlIZQbhuQbt6_R6qSy34gqiXpsYmmWiiI'
    try {
        const fetchData = await axios.post(url, authData)    
        dispatch(authSuccess(fetchData.data.idToken, fetchData.data.refreshToken, fetchData.data.localId))

    } catch (error) {
        dispatch(authFail({ message: error?.response?.data?.error, 
            status: error?.response?.status }))
    }
}