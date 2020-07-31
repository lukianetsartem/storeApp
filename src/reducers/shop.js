import {addToWishListRequest, editWishListRequest, getProducts, getWishList} from "../api/shop"

const SET_PRODUCT_DATA_AC = 'SET_PRODUCT_DATA_AC'
const SET_PRODUCTS_AC = 'SET_PRODUCTS_AC'
const SET_WISH_LIST = 'SET_WISH_LIST'

const token = localStorage.getItem('token')
const initialState = {
    wishListLoaded: false,
    products: [],
    wishList: [],
    product: {},
    count: 0,
}

export const shop = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS_AC:
            return {
                ...state,
                products: action.products,
                isProductsLoaded: true,
            }
        case SET_PRODUCT_DATA_AC:
            return {
                ...state,
                product: action.product,
                isProductDataLoaded: true,
            }
        case SET_WISH_LIST:
            return {
                ...state,
                wishList: action.wishList,
                wishListLoaded: true,
            }
        default:
            return state
    }
}

// Getting product data
export const setProducts = () => async dispatch => {
    const res = await getProducts()
    const products = res.products
    dispatch({type: SET_PRODUCTS_AC, products})
}

// Getting product data, filtered by requested product type
export const setProductData = (reqProduct) => async dispatch => {
    const res = await getProducts()
    res.products.filter(product => {
        const resProduct = product.description
            .replace(',', ' ')
            .replace('& ', '')
            .replace('  ', ' ')
            .split(' ')
            .join('-').toLowerCase()
        if(resProduct === reqProduct) dispatch({type: SET_PRODUCT_DATA_AC, product})
    })
}

// Getting wish list data
export const setWishList = () => async dispatch => {
    const res = await getWishList(token)
    const wishList = res.wishList
    dispatch({type: SET_WISH_LIST, wishList})
}

// Editing wish list data
export const editWishList = (data) => async dispatch => {
    await editWishListRequest(token, data)
    const res = await getWishList(token)
    const wishList = res.wishList
    dispatch({type: SET_WISH_LIST, wishList})
}

// Editing wish list data
export const addToWishList = (data) => async dispatch => {
    await addToWishListRequest(token, data)
    const res = await getWishList(token)
    const wishList = res.wishList
    dispatch({type: SET_WISH_LIST, wishList})
}