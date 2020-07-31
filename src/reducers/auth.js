import {
    changePasswordRequest,
    editUserDataRequest,
    getUserAddressRequest,
    getUserDataRequest,
    setUserAddressRequest,
    signInRequest,
    signUpRequest,
} from "../api/auth"
import {
    CHANGE_PASSWORD, changePasswordAC,
    GET_USER_ADDRESS,
    GET_USER_DATA, getUserAddressAC, getUserDataAC,
    LOGOUT, logoutAC,
    RESET_USER_DATA, resetUserDataAC, SET_USER_ADDRESS, setUserAddressAC,
    SIGN_IN,
    SIGN_UP, signInAC, signUpAC
} from "../actions/auth";

const token = localStorage.getItem('token')
const isAuth = () => token !== null && true
const initialState = {
    isAuth: isAuth(),
    passwordChanged: false,
    addressChanged: false,
    signupSuccess: false,
    signinSuccess: false,
    isDataLoaded: false,
    dataEdited: false,
    userAddress: {},
    userData: {},
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
        dispatch(signInAC())
    }
}

// Sign up
export const signUp = (authData) => async dispatch => {
    const res = await signUpRequest(authData)
    res.resultCode === 0 && dispatch(signUpAC())
}

// Logout
export const logout = () => dispatch => {
    localStorage.removeItem('token')
    dispatch(logoutAC())
}

// Set user address
export const changePassword = (data) => async dispatch => {
    const res = await changePasswordRequest(token, data)
    res.resultCode === 0 && dispatch(changePasswordAC())
}

// Get user data
export const getUserData = () => async dispatch => {
    const token = localStorage.getItem('token')
    const res = await getUserDataRequest(token)
    const userData = res.data
    res.resultCode === 0 && dispatch(getUserDataAC(userData))
}

// Set user data
export const editUserData = (data) => async dispatch => {
    const res = await editUserDataRequest(token, data)
    const userData = res.data
    res.resultCode === 0 && dispatch(resetUserDataAC(userData))
}

// Get user address
export const getUserAddress = () => async dispatch => {
    const res = await getUserAddressRequest(token)
    const userAddress = res.address
    res.resultCode === 0 && dispatch(getUserAddressAC(userAddress))
}

// Set user address
export const setUserAddress = (data) => async dispatch => {
    const res = await setUserAddressRequest(token, data)
    const userAddress = res.address
    res.resultCode === 0 && dispatch(setUserAddressAC(userAddress))
}