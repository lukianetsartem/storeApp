import React from 'react'
import '../../../scss/sliders/homeProductSlider.scss'
import {NavLink} from "react-router-dom"
import {Carousel} from "antd"
import 'antd/dist/antd.css'
import {Price} from "../../common/Price"

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
                                            oldPrice={p.oldPrice}
                                            productLink={p.productLink}
                                            key={p._id}/>)}
            </Carousel>
        </div>
    )
}

const ProductSlide = (props) => {

    return (
        <NavLink to={`products/${props.productLink}`} className={'product-slide'}>
            <img alt={''} src={props.productPhoto} className={'product-slide-img'}/>
            <p className={'product-slide-name'}>
                {props.description.length >= 22 ? props.description.substr(0, 25) + '..' : props.description}
            </p>
            <Price price={props.price} oldPrice={props.oldPrice}/>
        </NavLink>
    )
}