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
                                            key={p._id}/>)}
            </Carousel>
        </div>
    )
}

const ProductSlide = (props) => {
    const productUrl = `/${props.productType}s/${props.description}`.toLowerCase().replace(',', '')
    const name = props.description

    return (
        <NavLink target="_blank" to={productUrl} className={'product-slide'}>
            <img src={props.productPhoto} className={'product-slide-img'}/>
            <p className={'product-slide-name'}>
                {name.length >= 22 ? name.substr(0, 25) + '..' : name}
            </p>
            <p className={'product-slide-price'}>£{props.price}</p>
        </NavLink>
    )
}