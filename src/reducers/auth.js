import {
    changePasswordRequest,
    getUserAddressRequest,
    getUserDataRequest,
    resetUserDataRequest,
    setUserAddressRequest,
    signInRequest,
    signUpRequest,
} from "../api/auth"

const SIGN_IN = 'SIGN_IN'
const SIGN_UP = 'SIGN_UP'
const CHANGE_PASSWORD = 'CHANGE_PASSWORD'

const GET_USER_DATA = 'GET_USER_DATA'
const RESET_USER_DATA = 'RESET_USER_DATA'

const GET_USER_ADDRESS = 'GET_USER_ADDRESS'
const SET_USER_ADDRESS = 'SET_USER_ADDRESS'

const token = localStorage.getItem('token')
const initialState = {
    userDetails: {},
    userAddress: {},
    passwordChanged: false,
    addressChanged: false,
    signupSuccess: false,
    isDataLoaded: true,
    isAuth: true,
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isAuth: true
            }
        case SIGN_UP:
            return {
                ...state,
                signupSuccess: true
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                passwordChanged: true
            }
        case GET_USER_DATA:
            return {
                ...state,
                userDetails: action.userDetails,
                isDataLoaded: true,
                isAuth: true
            }
        case RESET_USER_DATA:
            return {
                ...state,
                userDetails: action.userDetails
            }
        case GET_USER_ADDRESS:
            return {
                ...state,
                userAddress: action.userAddress
            }
        case SET_USER_ADDRESS:
            return {
                ...state,
                userAddress: action.userAddress,
                addressChanged: true
            }
        default:
            return state
    }
}

// Sign in
export const signIn = (authData) => async dispatch => {
    const res = await signInRequest(authData)
    if (res.resultCode === 0) {
        dispatch({type: SIGN_IN})
        localStorage.setItem('token', res.token)
    }
}

// Sign up
export const signUp = (authData) => {
    const res = signUpRequest(authData)
    res.resultCode === 0 && console.log('account created')
}

// Set user address
export const changePassword = (data) => async dispatch => {
    const res = await changePasswordRequest(token, data)
    res.resultCode === 0 && dispatch({type: CHANGE_PASSWORD})
}

// Get user data
export const getUserData = () => async dispatch => {
    const res = await getUserDataRequest(token)
    const userDetails = res.details
    res.resultCode === 0 && dispatch({type: GET_USER_DATA, userDetails})
}

// Set user data
export const resetUserData = (data) => async dispatch => {
    const res = await resetUserDataRequest(token, data)
    const userDetails = res.details
    res.resultCode === 0 && dispatch({type: RESET_USER_DATA, userDetails})
}

// Get user address
export const getUserAddress = () => async dispatch => {
    const res = await getUserAddressRequest(token)
    const userAddress = res.address
    res.resultCode === 0 && dispatch({type: GET_USER_ADDRESS, userAddress})
}

// Set user address
export const setUserAddress = (data) => async dispatch => {
    const res = await setUserAddressRequest(token, data)
    const userAddress = res.address
    res.resultCode === 0 && dispatch({type: SET_USER_ADDRESS, userAddress})
}