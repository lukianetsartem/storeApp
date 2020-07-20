import {addToWishList, getProducts, removeFromWishList} from "../api/shop"

const SET_PRODUCT_DATA_AC = 'SET_PRODUCT_DATA_AC'
const SET_PRODUCTS_AC = 'SET_PRODUCTS_AC'
const WISH_LIST_ADD = 'WISH_LIST_ADD'
const WISH_LIST_REMOVE = 'WISH_LIST_REMOVE'

const initialState = {
    isProductDataLoaded: false,
    isProductsLoaded: false,
    products: [],
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
        default:
            return state
    }
}

// Getting product data from server
export const setProducts = () => async dispatch => {
    const res = await getProducts()
    const products = res.products
    dispatch({type: SET_PRODUCTS_AC, products})
}

// Getting product data from server, filtered by requested product type
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

export const wishListAdd = (id) => async dispatch => {
    const res = await addToWishList(id)
    // dispatch({type: WISH_LIST_ADD, id})
}

export const wishListRemove = (id) => async dispatch => {
    const res = await removeFromWishList(id)
    // dispatch({type: WISH_LIST_REMOVE, id})
}