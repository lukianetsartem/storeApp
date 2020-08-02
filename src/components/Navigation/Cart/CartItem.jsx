import React, {useState} from "react"

export const CartItem = ({item}) => {

    const [quantity, setQuantity] = useState(item.quantity)

    const sendQuantity = (bool) => {
        bool ? setQuantity(quantity + 1)
            : setQuantity(quantity - 1)
    }

    console.log(quantity)

    return (
        <div className={'cart-item'}>
            <div className={'cart-item-first-section'}>
                <img alt='' src={item.modelPhoto}/>
                <div className={'cart-item-data-content'}>
                    <p className={'cart-item-description'}>{item.description}</p>
                    {item.inStock > 0
                        ? <p className={'cart-item-dispatching'}>Dispatched within 10 - 12 weeks</p>
                        : <p className={'cart-item-not-dispatching'}>This product is currently out of stock.</p>}
                    <button>Remove</button>
                </div>
            </div>
            <div className={'cart-item-price'}>
                {!item.oldPrice && <p className={'product-store-item-price'}>£{item.price}</p>}
                {item.oldPrice && <div className={'sale-price-product'}>
                    <p className={'product-store-item-sale-price'}>£{item.price}</p>
                    <p className={'product-store-item-disabled-price'}>£{item.oldPrice}</p>
                </div>}
            </div>
            <div className={'cart-item-quantity'}>
                <div className={'cart-item-quantity-seter'}>
                    <button onClick={() => sendQuantity(false)}
                            disabled={quantity < 2}
                            type={'submit'}>-</button>
                    <input maxLength={2} defaultValue={quantity}/>
                    <button onClick={() => sendQuantity(true)}
                            disabled={quantity > 98}
                            type={'submit'}>+</button>
                </div>
            </div>
            <div className={'cart-item-total'}>
                <p>£{item.price}</p>
            </div>
        </div>
    )
}