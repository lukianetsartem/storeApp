import React, {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import {UPDATE_QUANTITY} from "../../../actions/shop"
import loader from '../../../assets/loading/loading.gif'
import {NavLink} from "react-router-dom";
import {Price} from "../../common/Price";

export const CartItem = ({item}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        setQuantityUpdating(false)
        console.log(item.quantity)
    }, [item])

    const [isQuantityUpdating, setQuantityUpdating] = useState(false)
    const sendQuantity = (increment) => {
        setQuantityUpdating(true)
        increment ? dispatch({
                type: UPDATE_QUANTITY, data: {
                    productId: item.id,
                    quantity: item.quantity + 1
                }
            })
            : dispatch({
                type: UPDATE_QUANTITY, data: {
                    productId: item.id,
                    quantity: item.quantity - 1
                }
            })
    }

    return (
        <div className={'cart-item'}>
            <div className={'cart-item-first-section'}>
                <NavLink to={`/products/${item.productLink}`}>
                    <img alt='' src={item.modelPhoto}/>
                </NavLink>
                <div className={'cart-item-data-content'}>
                    <p className={'cart-item-description'}>{item.description}</p>
                    {item.inStock > 0
                        ? <p className={'cart-item-dispatching'}>Dispatched within 10 - 12 weeks</p>
                        : <p className={'cart-item-not-dispatching'}>This product is currently out of stock.</p>}
                    <button>Remove</button>
                </div>
            </div>
            <div className={'cart-item-price'}>
                <Price price={item.price} oldPrice={item.oldPrice}/>
            </div>
            <div className={'cart-item-quantity'}>
                <div className={'cart-item-quantity-seter'}>
                    <button onClick={() => sendQuantity(false)}
                            disabled={isQuantityUpdating || item.quantity < 2}
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
                <p>£{item.price * item.quantity}</p>
            </div>
        </div>
    )
}