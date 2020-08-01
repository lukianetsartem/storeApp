export const SET_PRODUCTS = 'SET_PRODUCTS'
export const SET_PRODUCT = 'SET_PRODUCT'
export const SET_WISH_LIST = 'SET_WISH_LIST'
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
export const LOAD_PRODUCT = 'LOAD_PRODUCT'
export const LOAD_WISH_LIST = 'LOAD_WISH_LIST'
export const EDIT_WISH_LIST = 'EDIT_WISH_LIST'
export const ADD_TO_WISH_LIST = 'ADD_TO_WISH_LIST'

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