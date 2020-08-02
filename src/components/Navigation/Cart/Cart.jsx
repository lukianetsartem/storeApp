import React, {useEffect} from 'react'
import '../../../scss/navigation/cart.scss'
import {NavLink} from "react-router-dom"
import {CartContent} from "./CartContent"
import {useDispatch, useSelector} from "react-redux"
import {LOAD_CART} from "../../../actions/shop"
import {Preloader} from "../../common/Preloader"

export const Cart = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: LOAD_CART})
    }, [dispatch])

    const cartLoaded = useSelector(state => state.shop.cartLoaded)

    if(!cartLoaded) return <Preloader/>
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