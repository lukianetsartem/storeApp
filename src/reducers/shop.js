import {SET_PRODUCT, SET_PRODUCTS, SET_WISH_LIST} from "../actions/shop"

const initialState = {
    wishListLoaded: false,
    productsLoaded: false,
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
                productsLoaded: true
            }
        case SET_PRODUCT:
            return {
                ...state,
                product: action.product,
                productLoaded: true,
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