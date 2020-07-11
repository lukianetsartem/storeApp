import {productsAPI} from "../api/api"

const SET_PRODUCT_DATA_AC = 'SET_PRODUCT_DATA_AC'
const SET_PRODUCTS_AC = 'SET_PRODUCTS_AC'
const SET_WISH_LIST_DATA = 'SET_WISH_LIST_DATA'

const initialState = {
    isProductDataLoaded: false,
    isProductsLoaded: false,
    products: [],
    wishList: [],
    product: {},
    count: 0,
}

export const products = (state = initialState, action) => {
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
    const res = await productsAPI.setProducts()
    const products = res.products
    dispatch({type: SET_PRODUCTS_AC, products})
}

// Getting product data from server, filtered by requested product type
export const setProductData = (reqProduct) => async dispatch => {
    const res = await productsAPI.setProducts()
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

export const setWishList = (wishListData) => dispatch => {
    dispatch({type: SET_WISH_LIST_DATA, wishListData})
}