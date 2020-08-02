import {
    addToCart,
    addToWishList,
    editWishList,
    getCart,
    getProduct,
    getProducts,
    getWishList,
    removeFromCart,
    updateQuantity
} from "../api/shop"
import {
    REMOVE_FROM_CART,
    ADD_TO_WISH_LIST,
    UPDATE_QUANTITY,
    EDIT_WISH_LIST,
    LOAD_WISH_LIST,
    LOAD_PRODUCTS,
    LOAD_PRODUCT,
    LOAD_CART,
    setWishListAC,
    setProductsAC,
    setProductAC,
    setCart, ADD_TO_CART
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

export function* setCartSaga() {
    const res = yield call(getCart, token)
    const cart = res.data.cart

    if (res.status === 200) {
        yield put(setCart(cart))
    }
}

export function* updateQuantitySaga({data}) {
    yield call(updateQuantity, token, data)
    const res = yield call(getCart, token)
    const cart = res.data.cart

    if (res.status === 200) {
        yield put(setCart(cart))
    }
}

export function* removeFromCartSaga({data}) {
    yield call(removeFromCart, token, data)
    const res = yield call(getCart, token)
    const cart = res.data.cart

    if (res.status === 200) {
        yield put(setCart(cart))
    }
}

export function* addToCartSaga({data}) {
    yield call(addToCart, token, data)
    const res = yield call(getCart, token)
    const cart = res.data.cart

    if (res.status === 200) {
        yield put(setCart(cart))
    }
}

export function* shopSaga() {
    yield all([
        takeEvery(LOAD_PRODUCTS, setProductsSaga),
        takeEvery(LOAD_PRODUCT, setProductSaga),
        takeEvery(LOAD_WISH_LIST, setWishListSaga),
        takeEvery(EDIT_WISH_LIST, editWishListSaga),
        takeEvery(ADD_TO_WISH_LIST, addToWishListSaga),
        takeEvery(UPDATE_QUANTITY, updateQuantitySaga),
        takeEvery(REMOVE_FROM_CART, removeFromCartSaga),
        takeEvery(ADD_TO_CART, addToCartSaga),
        takeEvery(LOAD_CART, setCartSaga),
    ])
}