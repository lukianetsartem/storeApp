import React from 'react'

export const ProductGallery = (props) => {
    const product = props.product

    return (
        <div className={'product-gallery'}>
            <div className={'product-gallery-first-section'}>
                <img alt={''} src={product.productPhotos.interiorPhoto}/>
            </div>
            <div className={'product-gallery-second-section'}>
                <img alt={''} src={product.productPhotos.additionalPhotos[2]}/>
                <img alt={''} src={product.productPhotos.additionalPhotos[4]}/>
            </div>
        </div>
    )
}