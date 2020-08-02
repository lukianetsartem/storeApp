import React from "react"
import {CartItem} from "./CartItem"

export const CartContent = ({cart}) => {

    return (
        <div className={'cart-page-content'}>
            <div className={'cart-page-header'}>
                <p className={'cart-page-header-title'}>Product</p>
                <p className={'cart-page-header-price'}>Unit price</p>
                <p className={'cart-page-header-quantity'}>Quantity</p>
                <p className={'cart-page-header-total'}>Total</p>
            </div>
            <div className={'cart-page-content-items'}>
                {cart.map(item => <CartItem item={item} key={item.id}/>)}
            </div>
        </div>
    )
}