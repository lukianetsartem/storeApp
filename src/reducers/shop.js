import {addToWishListRequest, editWishListRequest, getProduct, getProducts, getWishList} from "../api/shop"
import {SET_PRODUCT, SET_PRODUCTS, SET_WISH_LIST, setProductAC, setProductsAC, setWishListAC} from "../actions/shop"

const token = localStorage.getItem('token')
const initialState = {
    wishListLoaded: false,
    productLoaded: false,
    products: [],
    wishList: [],
    product: {},
    count: 0,
}

export const shop = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products,
            }
        case SET_PRODUCT:
            return {
                ...state,
                product: action.product,
                productLoaded: true,
            }
        case SET_WISH_LIST:
            debugger
            return {
                ...state,
                wishList: action.wishList,
                wishListLoaded: true,
            }
        default:
            return state
    }
}

// Getting products data
export const setProducts = () => async dispatch => {
    const res = await getProducts()
    const products = res.products
    res.resultCode === 0 && dispatch(setProductsAC(products))
}

// Getting product data
export const setProductData = (name) => async dispatch => {
    const res = await getProduct(name)
    const product = res.product
    res.resultCode === 0 && dispatch(setProductAC(product))
}

// Getting wish list data
export const setWishList = () => async dispatch => {
    const res = await getWishList(token)
    const wishList = res.wishList
    res.resultCode === 0 && dispatch(setWishListAC(wishList))
}

// Editing wish list data
export const editWishList = (data) => async dispatch => {
    await editWishListRequest(token, data)
    const res = await getWishList(token)
    const wishList = res.wishList
    res.resultCode === 0 && dispatch(setWishListAC(wishList))
}

// Add to wish list
export const addToWishList = (data) => async dispatch => {
    await addToWishListRequest(token, data)
    const res = await getWishList(token)
    const wishList = res.wishList
    res.resultCode === 0 && dispatch(setWishListAC(wishList))
}