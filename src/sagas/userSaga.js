import {all, call, put, takeEvery} from "@redux-saga/core/effects"
import {token} from "../store/store"
import {
    changePasswordAC,
    getUserAddressAC,
    setUserAddressAC,
    resetUserDataAC,
    getUserDataAC,
    logoutAC,
    signInAC,
    signUpAC,
    START_CHANGE_PASSWORD,
    LOAD_SET_USER_DATA,
    LOAD_GET_USER_DATA,
    LOAD_GET_ADDRESS,
    LOAD_SET_ADDRESS,
    START_SIGN_IN,
    START_SIGN_UP,
    START_LOGOUT
} from "../actions/user"
import {changePassword, editUserData, getUserAddress, getUserData, setUserAddress, signIn, signUp} from "../api/user"

export function* signInSaga({data}) {
    const res = yield call(signIn, data)

    if (res.status === 200) {
        localStorage.setItem('token', res.data.token)
        yield put(signInAC())
    }
}

export function* signUpSaga({data}) {
    const res = yield call(signUp, data)

    if (res.status === 200) {
        yield put(signUpAC())
    }
}

export function* logoutSaga() {
    localStorage.removeItem('token')
    yield put(logoutAC())
}

export function* changePasswordSaga({data}) {
    const res = yield call(changePassword, token, data)

    if (res.status === 200) {
        yield put(changePasswordAC())
    }
}

export function* getUserDataSaga() {
    const token = localStorage.getItem('token')
    const res = yield call(getUserData, token)

    const userData = res.data.data
    if (res.status === 200) {
        yield put(getUserDataAC(userData))
    }
}

export function* editUserDataSaga({data}) {
    const res = yield call(editUserData, token, data)

    const userData = res.data.data
    if (res.status === 200) {
        yield put(resetUserDataAC(userData))
    }
}

export function* getUserAddressSaga() {
    const res = yield call(getUserAddress, token)

    const userAddress = res.data.address
    if (res.status === 200) {
        yield put(getUserAddressAC(userAddress))
    }
}

export function* setUserAddressSaga({address}) {
    const res = yield call(setUserAddress, token, address)

    const userAddress = res.data.address
    if (res.status === 200) {
        yield put(setUserAddressAC(userAddress))
    }
}

export function* userSaga() {
    yield all([
        takeEvery(START_SIGN_IN, signInSaga),
        takeEvery(START_SIGN_UP, signUpSaga),
        takeEvery(START_LOGOUT, logoutSaga),
        takeEvery(START_CHANGE_PASSWORD, changePasswordSaga),
        takeEvery(LOAD_GET_USER_DATA, getUserDataSaga),
        takeEvery(LOAD_SET_USER_DATA, editUserDataSaga),
        takeEvery(LOAD_GET_ADDRESS, getUserAddressSaga),
        takeEvery(LOAD_SET_ADDRESS, setUserAddressSaga),
    ])
}