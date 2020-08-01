export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'
export const LOGOUT = 'LOGOUT'
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const GET_USER_DATA = 'GET_USER_DATA'
export const RESET_USER_DATA = 'RESET_USER_DATA'
export const GET_USER_ADDRESS = 'GET_USER_ADDRESS'
export const SET_USER_ADDRESS = 'SET_USER_ADDRESS'
export const START_SIGN_IN = 'START_SIGN_IN'
export const START_SIGN_UP = 'START_SIGN_UP'
export const START_LOGOUT = 'START_LOGOUT'
export const START_CHANGE_PASSWORD = 'START_CHANGE_PASSWORD'
export const LOAD_GET_USER_DATA = 'LOAD_GET_USER_DATA'
export const LOAD_SET_USER_DATA = 'LOAD_SET_USER_DATA'
export const LOAD_SET_ADDRESS = 'LOAD_SET_ADDRESS'
export const LOAD_GET_ADDRESS = 'LOAD_SET_ADDRESS'


export const signInAC = () => {
    return {
        type: SIGN_IN
    }
}

export const signUpAC = () => {
    return {
        type: SIGN_UP
    }
}

export const logoutAC = () => {
    return {
        type: LOGOUT
    }
}

export const changePasswordAC = () => {
    return {
        type: CHANGE_PASSWORD
    }
}

export const getUserDataAC = (userData) => {
    return {
        type: GET_USER_DATA,
        userData: userData
    }
}

export const resetUserDataAC = (userData) => {
    return {
        type: RESET_USER_DATA,
        userData: userData
    }
}

export const getUserAddressAC = (userAddress) => {
    return {
        type: GET_USER_ADDRESS,
        userAddress: userAddress
    }
}

export const setUserAddressAC = (userAddress) => {
    return {
        type: SET_USER_ADDRESS,
        userAddress: userAddress
    }
}