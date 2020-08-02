import React from "react"

export const Price = ({price, oldPrice, inStock}) => {
    return (
        <div>
            {!oldPrice && <p style={inStock < 1 ? {opacity: 0.5} : undefined} className={'product-store-item-price'}>£{price}</p>}
            {oldPrice && <div style={inStock < 1 ? {opacity: 0.5} : undefined} className={'sale-price-product'}>
                <p className={'product-store-item-sale-price'}>£{price}</p>
                <p className={'product-store-item-disabled-price'}>£{oldPrice}</p>
            </div>}
        </div>
    )
}