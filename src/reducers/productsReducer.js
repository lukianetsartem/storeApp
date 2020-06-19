import {productsAPI} from "../api/api"

const SET_PRODUCTS_AC = 'SET_PRODUCTS_AC'
const SET_PRODUCT_DATA_AC = 'SET_PRODUCT_DATA_AC'

const initialState = {
    products: [],
    product: {},
    count: 0,
    isLoaded: false,
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS_AC:
            return {
                ...state,
                products: action.products,
                isLoaded: action.isLoaded,
            }
        case SET_PRODUCT_DATA_AC:
            return {
                ...state,
                product: action.p,
                isLoaded: action.isLoaded,
            }
        default:
            return state
    }
}

// Getting product data from server
export const setProducts = () => async dispatch => {
    const res = await productsAPI.setProducts()
    const isLoaded = true
    const products = res.products
    dispatch({type: SET_PRODUCTS_AC, products, isLoaded})
}

// Getting product data from server, filtered by requested product type
export const setProductData = (reqProduct) => async dispatch => {
    const res = await productsAPI.setProducts()
    const isLoaded = true
    res.products.filter(p => {
        const resProduct = p.description
            .replace(',', ' ')
            .replace('  ', ' ')
            .split(' ')
            .join('-').toLowerCase()
        if(resProduct === reqProduct) {
            dispatch({type: SET_PRODUCT_DATA_AC, p, isLoaded})
        }
    })
}