import React from "react"

export const Price = ({price, oldPrice}) => {
    return (
        <div>
            {!oldPrice && <p className={'product-store-item-price'}>£{price}</p>}
            {oldPrice && <div className={'sale-price-product'}>
                <p className={'product-store-item-sale-price'}>£{price}</p>
                <p className={'product-store-item-disabled-price'}>£{oldPrice}</p>
            </div>}
        </div>
    )
}