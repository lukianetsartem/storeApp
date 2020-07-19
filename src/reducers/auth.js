import {signInRequest, signUpRequest, userDataRequest} from "../api/auth"

const SIGN_IN = 'SIGN_IN'
const GET_USER_DATA = 'GET_USER_DATA'

const initialState = {
    isAuth: true,
    user: {
        login: '',
        firstName: '',
        lastName: '',
        email: '',
    },
    isDataLoaded: true,
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isAuth: true
            }
        case GET_USER_DATA:
            return {
                ...state,
                isAuth: true,
                isDataLoaded: true
            }
        default:
            return state
    }
}

// Sign in
export const signIn = (authData) => async dispatch => {
    const res = await signInRequest(authData)
    res.resultCode === 0 && dispatch({type: SIGN_IN})
}

// Sign up
export const signUp = (authData) => async dispatch => {
    const res = await signUpRequest(authData)
    res.resultCode === 0 && console.log('account created')
}

// Get user data
export const getUserData = () => async dispatch => {
    const res = await userDataRequest()
    res.resultCode === 0 && dispatch({type: GET_USER_DATA})
}