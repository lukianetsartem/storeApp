import React from "react"
import {CartItem} from "./CartItem"
import {useSelector} from "react-redux"
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined'
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined'

export const CartContent = () => {

    const cart = useSelector(state => state.shop.cart)
    // Subtotal amount of products in cart
    const subtotal = cart.map(item => item.price)
    // Total price (string)
    const totalPrice = subtotal.reduce((prevValue, currentValue) => prevValue + currentValue).toString().split('')
    totalPrice.splice(0, 1, `${totalPrice[0]}`, ",").join('')
    // Is in cart a product, that is out of stock?
    const hasNotInStock = cart.filter(item => item.inStock === 0).length > 0

    const goToCheckout = () => {}

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
            <div className={'cart-page-footer'}>
                <div className={'cart-page-checkout'}>
                    <div className={'cart-page-delivery'}>
                        <div>
                            <LocalShippingOutlinedIcon className={'cart-page-delivery-icon'}/>
                            <p>Home Delivery available</p>
                        </div>
                        <div>
                            <CheckCircleOutlinedIcon className={'cart-page-delivery-icon'}/>
                            <p>Check your cart, before go to checkout</p>
                        </div>
                        <p className={'cart-page-delivery-price'}>£39</p>
                    </div>
                    <span/>
                    <div className={'cart-page-total'}>
                        <p className={'cart-page-subtotal'}>Subtotal ({subtotal.length} items)</p>
                        <div>
                            <p className={'cart-page-total-price'}>£{totalPrice}</p>
                            <p>(Excluding delivery)</p>
                        </div>
                        <button onClick={() => goToCheckout()}
                            disabled={hasNotInStock}>go to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}