import React from 'react'
import {NavLink} from "react-router-dom"
import {ADD_TO_CART} from "../../../../actions/shop"
import {useDispatch} from "react-redux"

export const ProductHeading = (props) => {
    const dispatch = useDispatch()
    const product = props.product

    const addToCart = () => {
        dispatch({type: ADD_TO_CART, data: product._id})
    }

    return (
        <div className={'product-page-heading'}>
            <p className={'product-page-heading-title'}>{product.name}</p>
            <p className={'product-page-heading-description'}>{product.description}</p>
            <p className={'product-page-heading-price'}>£{product.price}</p>
            <p className={'product-page-heading-loyalty'}>or £{Math.ceil(product.price * 0.8)} with <NavLink to={'/loyalty-program'} className={'loyalty-program'}>loyalty program</NavLink></p>
            <p className={'product-page-heading-dispatch'}>Dispatched in 3 - 4 weeks <span className={'in-stock'}>Only {product.inStock} left</span></p>
            <button onClick={() => addToCart()} className={'product-page-heading-basket-adder'}>Add to cart</button>
        </div>
    )
}