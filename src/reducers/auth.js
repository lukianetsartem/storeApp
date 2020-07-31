import {
    changePasswordRequest,
    editUserDataRequest,
    getUserAddressRequest,
    getUserDataRequest,
    setUserAddressRequest,
    signInRequest,
    signUpRequest,
} from "../api/auth"

const SIGN_IN = 'SIGN_IN'
const SIGN_UP = 'SIGN_UP'
const LOGOUT = 'LOGOUT'
const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
const GET_USER_DATA = 'GET_USER_DATA'
const RESET_USER_DATA = 'RESET_USER_DATA'
const GET_USER_ADDRESS = 'GET_USER_ADDRESS'
const SET_USER_ADDRESS = 'SET_USER_ADDRESS'

const token = localStorage.getItem('token')
const isAuth = () => token !== null && true
const initialState = {
    isAuth: false,//isAuth(),
    userData: {},
    userAddress: {},
    passwordChanged: false,
    addressChanged: false,
    signupSuccess: false,
    signinSuccess: false,
    dataEdited: false,
    isDataLoaded: false,
}

export const user = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isAuth: true,
                signinSuccess: true,
            }
        case SIGN_UP:
            return {
                ...state,
                signupSuccess: true
            }
        case LOGOUT:
            return {
                ...state,
                isAuth: false,
                isDataLoaded: false,
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                passwordChanged: true
            }
        case GET_USER_DATA:
            return {
                ...state,
                userData: action.userData,
                isDataLoaded: true
            }
        case RESET_USER_DATA:
            return {
                ...state,
                userData: action.userData,
                dataEdited: true
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
        localStorage.setItem('token', res.token)
        dispatch({type: SIGN_IN})
    }
}

// Sign up
export const signUp = (authData) => async dispatch => {
    const res = await signUpRequest(authData)
    res.resultCode === 0 && dispatch({type: SIGN_UP})
}

// Logout
export const logout = () => dispatch => {
    localStorage.removeItem('token')
    dispatch({type: LOGOUT})
}

// Set user address
export const changePassword = (data) => async dispatch => {
    const res = await changePasswordRequest(token, data)
    res.resultCode === 0 && dispatch({type: CHANGE_PASSWORD})
}

// Get user data
export const getUserData = () => async dispatch => {
    const token = localStorage.getItem('token')
    const res = await getUserDataRequest(token)
    const userData = res.data
    res.resultCode === 0 && dispatch({type: GET_USER_DATA, userData})
}

// Set user data
export const editUserData = (data) => async dispatch => {
    const res = await editUserDataRequest(token, data)
    const userData = res.data
    res.resultCode === 0 && dispatch({type: RESET_USER_DATA, userData})
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