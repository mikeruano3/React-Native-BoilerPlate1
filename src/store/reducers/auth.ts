import { FetchError } from '../../dataDefinitions/fetchError'
import * as actionTypes from '../actions/actionTypes'

export interface AuthState {
    token?: string,
    refreshToken?: string
    userId?: string,

    error?: FetchError,
    loading: boolean,
}

const initialState:AuthState = {
    token: undefined,
    refreshToken: undefined,
    userId: undefined,

    error: undefined,
    loading: false,
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.AUTH_INIT: 
            return {
                ...state,
                ...initialState
            }
        case actionTypes.AUTH_LOGOUT:  
            return {
                ...state,
                ...initialState
            }
        case actionTypes.AUTH_START: 
            return {
                ...state,
                ...initialState,
                loading: true
            }
        case actionTypes.AUTH_SUCCESS: 
            return {
                ...state,
                token: action.payload.token,
                refreshToken: action.payload.refreshToken,
                userId: action.payload.userId,
            
                error: undefined,
                loading: false,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            }
        default: return state
    }
}

export default reducer