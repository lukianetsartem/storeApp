import React, {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import {REMOVE_FROM_CART, UPDATE_QUANTITY} from "../../../actions/shop"
import loader from '../../../assets/loading/loading.gif'
import {NavLink} from "react-router-dom"
import {Price} from "../../common/Price"

export const CartItem = ({item}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        setQuantityUpdating(false)
    }, [item])

    const [isQuantityUpdating, setQuantityUpdating] = useState(false)
    const sendQuantity = (increment) => {
        setQuantityUpdating(true)
        if (increment) {
            dispatch({
                type: UPDATE_QUANTITY,
                data: {
                    productId: item.id,
                    quantity: item.quantity + 1
                }
            })
        } else if (item.quantity - 1 === 0) {
            debugger
            removeFromCart()
        } else {
            dispatch({
                type: UPDATE_QUANTITY,
                data: {
                    productId: item.id,
                    quantity: item.quantity - 1
                }
            })
        }
    }

    const removeFromCart = () => {
        setQuantityUpdating(true)
        dispatch({type: REMOVE_FROM_CART, data: item.id})
    }

    return (
        <div className={'cart-item'}>
            <div className={'cart-item-first-section'}>
                <NavLink to={`/products/${item.productLink}`}>
                    <img alt='' src={item.modelPhoto}
                         style={item.inStock < 1 ? {filter: "grayscale(100%)"} : undefined}/>
                </NavLink>
                <div className={'cart-item-data-content'}>
                    <p className={'cart-item-description'}>{item.description}</p>
                    {item.inStock > 0
                        ? <p className={'cart-item-dispatching'}>Dispatched within 10 - 12 weeks</p>
                        : <p className={'cart-item-not-dispatching'}>This product is currently out of stock.</p>}
                    <button onClick={() => removeFromCart()}>Remove</button>
                </div>
            </div>
            <div className={'cart-item-price'}>
                <Price price={item.price} oldPrice={item.oldPrice} inStock={item.inStock}/>
            </div>
            <div className={'cart-item-quantity'}>
                <div className={'cart-item-quantity-seter'} style={isQuantityUpdating ? {opacity: 0.5} : undefined}>
                    <button onClick={() => sendQuantity(false)}
                            type={'submit'}>-
                    </button>
                    {!isQuantityUpdating ? <input maxLength={2}
                                                  disabled={isQuantityUpdating}
                                                  defaultValue={item.quantity}/>
                        : <div className={'quantity-loader'}>
                            <img alt='' src={loader}/>
                        </div>}
                    <button onClick={() => sendQuantity(true)}
                            disabled={isQuantityUpdating || item.quantity > 98}
                            type={'submit'}>+
                    </button>
                </div>
            </div>
            <div className={'cart-item-total'}>
                <p style={item.inStock < 1 ? {opacity: 0.5} : undefined}>£{item.price * item.quantity}</p>
            </div>
        </div>
    )
}