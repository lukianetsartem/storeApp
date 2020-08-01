import {addToWishList, editWishList, getProduct, getProducts, getWishList} from "../api/shop"
import {
    ADD_TO_WISH_LIST,
    EDIT_WISH_LIST,
    LOAD_PRODUCT,
    LOAD_PRODUCTS,
    LOAD_WISH_LIST,
    setProductAC,
    setProductsAC,
    setWishListAC
} from "../actions/shop"
import {put, call, takeEvery, all} from "@redux-saga/core/effects"
import {token} from "../store/store"


export function* setProductsSaga() {
    const res = yield call(getProducts)
    const products = res.data.products

    if (res.status === 200) {
        yield put(setProductsAC(products))
    }
}

export function* setProductSaga(data) {
    const productName = data.productName
    const res = yield call(getProduct, productName)
    const product = res.data.product

    if (res.status === 200) {
        yield put(setProductAC(product))
    }
}

export function* setWishListSaga() {
    const res = yield call(getWishList, token)
    const wishList = res.data.wishList

    if (res.status === 200) {
        yield put(setWishListAC(wishList))
    }
}

export function* editWishListSaga({data}) {
    yield call(editWishList, token, data)
    const res = yield call(getWishList, token)
    const wishList = res.data.wishList

    if (res.status === 200) {
        yield put(setWishListAC(wishList))
    }
}

export function* addToWishListSaga({data}) {
    yield call(addToWishList, token, data)
    const res = yield call(getWishList, token)
    const wishList = res.data.wishList

    if (res.status === 200) {
        yield put(setWishListAC(wishList))
    }
}

export function* userSaga() {
    yield all([
        takeEvery(LOAD_PRODUCTS, setProductsSaga),
        takeEvery(LOAD_PRODUCT, setProductSaga),
        takeEvery(LOAD_WISH_LIST, setWishListSaga),
        takeEvery(EDIT_WISH_LIST, editWishListSaga),
        takeEvery(ADD_TO_WISH_LIST, addToWishListSaga)
    ])
}