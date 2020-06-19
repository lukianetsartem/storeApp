import React from 'react'
import '../../../scss/sliders/homeProductSlider.scss'
import {NavLink} from "react-router-dom"
import {Carousel} from "antd"
import 'antd/dist/antd.css'

export const HomeProductSlider = (props) => {
    // Slider settings
    const settings = {
        slidesPerRow: 1,
        slidesToScroll: 1,
        slidesToShow: 4,
        speed: 500,
        arrows: false,
        dots: false,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
    }

    return (
        <div className={'product-slider-container'}>
            <p className={'product-slider-title'}>{props.title}</p>
            <Carousel {...settings} className={'product-slider'}>
                {props.products
                    .filter(p => p.productType === props.productType)
                    .map(p => <ProductSlide productType={p.productType}
                                            productPhoto={p.productPhotos.modelPhoto}
                                            description={p.description}
                                            price={p.price}
                                            salePrice={p.salePrice}
                                            key={p._id}/>)}
            </Carousel>
        </div>
    )
}

const ProductSlide = (props) => {
    // Product url to reference on product
    const productUrl = `products/${props.description
        .replace(',', ' ')
        .replace('  ', ' ')
        .split(' ')
        .join('-').toLowerCase()}`

    return (
        <NavLink to={productUrl} className={'product-slide'}>
            <img src={props.productPhoto} className={'product-slide-img'}/>
            <p className={'product-slide-name'}>
                {props.description.length >= 22 ? props.description.substr(0, 25) + '..' : props.description}
            </p>
            {!props.salePrice && <p className={'product-store-item-price'}>£{props.price}</p>}
            {props.salePrice && <div className={'sale-price-product'}>
                <p className={'product-store-item-sale-price'}>£{props.salePrice}</p>
                <p className={'product-store-item-disabled-price'}>£{props.price}</p>
            </div>}
        </NavLink>
    )
}