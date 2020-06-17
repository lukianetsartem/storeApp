import React from 'react'
import '../../../scss/sliders/productSlider.scss'
import {Carousel} from "antd";
import 'antd/dist/antd.css';
import {NavLink} from "react-router-dom";

export const ProductSlider = (props) => {
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
    const productUrl = `${props.productType}/${props.description
        .replace(',', ' ')
        .split(' ')
        .join('-')}`
        .toLowerCase()
    const name = props.description

    return (
        <NavLink to={productUrl} className={'product-slide'}>
            <img src={props.productPhoto} className={'product-slide-img'}/>
            <p className={'product-slide-name'}>
                {name.length >= 22 ? name.substr(0, 25) + '..' : name}
            </p>
            {!props.salePrice && <p className={'product-store-item-price'}>£{props.price}</p>}
            {props.salePrice && <div className={'sale-price-product'}>
                <p className={'product-store-item-sale-price'}>£{props.salePrice}</p>
                <p className={'product-store-item-disabled-price'}>£{props.price}</p>
            </div>}
        </NavLink>
    )
}