import React from 'react'

export const ProductDescription = (props) => {
    const productParams = props.productParams
    const details = props.details

    return (
        <div className={'product-description'}>
            <p className={'product-description-header'}>Dimensions & Details</p>
            <div className={'product-description-content'}>
                <div className={'product-description-row'}>
                    <p className={'product-description-title'}>Dimensions</p>
                    <div>
                        <div className={'product-description-item'}>
                            <span>Height(cm):</span>
                            <p>{productParams.height}</p>
                        </div>
                        <div className={'product-description-item'}>
                            <span>Width(cm):</span>
                            <p>{productParams.width}</p>
                        </div>
                        <div className={'product-description-item'}>
                            <span>Width(cm):</span>
                            <p>{productParams.width}</p>
                        </div>
                        <div className={'product-description-item'}>
                            <span>Depth(cm):</span>
                            <p>{productParams.depth}</p>
                        </div>
                        <div className={'product-description-item'}>
                            <span>Weight(kg):</span>
                            <p>{productParams.weight}</p>
                        </div>
                        <div className={'product-description-item'}>
                            <span>Size:</span>
                            <p>{productParams.size}</p>
                        </div>
                    </div>
                </div>
                <div className={'product-description-row'}>
                    <p className={'product-description-title'}>Product details</p>
                    <div>
                        <div className={'product-description-item'}>
                            <span>Assembly:</span>
                            <p>{details.assembly}</p>
                        </div>
                        <div className={'product-description-item'}>
                            <span>Material:</span>
                            <p>{details.fabricComposition}</p>
                        </div>
                        <div className={'product-description-item'}>
                            <span>Foam Type:</span>
                            <p>{details.foamType}</p>
                        </div>
                        <div className={'product-description-item'}>
                            <span>Care:</span>
                            <p>{details.care}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}