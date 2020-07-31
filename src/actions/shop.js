import {SET_PRODUCT, SET_PRODUCTS, SET_WISH_LIST} from "../reducers/shop"

export const setProductsAC = (products) => {
    return {
        type: SET_PRODUCTS,
        products: products
    }
}

export const setProductAC = (product) => {
    return {
        type: SET_PRODUCT,
        product: product
    }
}

export const setWishListAC = (wishList) => {
    return {
        type: SET_WISH_LIST,
        wishList: wishList
    }
}