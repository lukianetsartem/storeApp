import {signInRequest, signUpRequest} from "../api/auth"

const SIGN_IN = 'SIGN_IN'
const SIGN_UP = 'SIGN_UP'

const initialState = {
    isAuth: false,
    user: {
        login: '',
        firstName: '',
        lastName: '',
        email: '',
    },
    isDataLoaded: false,
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isAuth: true
            }
        default:
            return state
    }
}

// Sign in
export const signIn = (authData) => async dispatch => {
    const res = await signInRequest(authData)
    if (res.resultCode === 0) dispatch({type: SIGN_IN})
}

// Sign up
export const signUp = (authData) => async dispatch => {
    const res = await signUpRequest(authData)
    if (res.resultCode === 0) console.log('account created')
}