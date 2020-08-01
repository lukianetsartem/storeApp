import {
    SET_USER_ADDRESS, GET_USER_ADDRESS, CHANGE_PASSWORD, RESET_USER_DATA,
    GET_USER_DATA, SIGN_IN, SIGN_UP, LOGOUT,
} from "../actions/user"

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