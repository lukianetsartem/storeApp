import React, {useEffect} from 'react'
import '../../../scss/navigation/cart.scss'
import {NavLink} from "react-router-dom"
import {CartContent} from "./CartContent"
import {useDispatch} from "react-redux"
import {LOAD_CART} from "../../../actions/shop"

export const Cart = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: LOAD_CART})
    }, [dispatch])

    return (
        <div className={'cart-page'}>
            <div className={'back-to-shopping-link'}>
                <NavLink to={'/chair'}>back to shopping</NavLink>
            </div>
            <p className={'cart-page-title'}>Shopping Cart</p>
            <CartContent/>
        </div>
    )
}