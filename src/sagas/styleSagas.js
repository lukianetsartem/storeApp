import {all, call, put, takeEvery} from "@redux-saga/core/effects"
import {token} from "../store/store"
import {deleteStyle, getStyle, setStyle} from "../api/user"
import {DELETE_STYLE, getStyleAC, LOAD_GET_STYLE, LOAD_SET_STYLE, setStyleAC} from "../actions/style"

export function* getStyleSaga() {
    const res = yield call(getStyle, token)

    const analysePhotos = res.data.analysePhotos
    const resultPhotos = res.data.resultPhotos
    const style = res.data.style

    if (res.status === 200) {
        yield put(getStyleAC(style, analysePhotos, resultPhotos))
    }
}

export function* setStyleSaga({data}) {
    const res = yield call(setStyle, token, data)

    const style = res.style
    if (res.status === 200) {
        yield put(setStyleAC(style))
    }
}

export function* deleteStyleSaga() {
    const res = yield call(deleteStyle, token)

    const style = res.style
    if (res.status === 200) {
        yield put(setStyleAC(style))
    }
}

export function* styleSaga() {
    yield all([
        takeEvery(LOAD_GET_STYLE, getStyleSaga),
        takeEvery(LOAD_SET_STYLE, setStyleSaga),
        takeEvery(DELETE_STYLE, deleteStyleSaga)
    ])
}