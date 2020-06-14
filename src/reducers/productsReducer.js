import {productsAPI} from "../api/api";

const SET_PRODUCTS_AC = 'SET_PRODUCTS_AC'

const initialState = {
    products: [],
    count: 0
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS_AC:
            return {
                ...state,
                products: action.products,
            }
        default:
            return state
    }
}

export const setProducts = () => async dispatch => {
    const res = await productsAPI.setProducts()
    const products = res.products
    dispatch({type: SET_PRODUCTS_AC, products})
    console.log(products)
}