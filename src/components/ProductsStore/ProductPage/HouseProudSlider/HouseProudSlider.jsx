import React from 'react'
import {Carousel} from "antd";
import '../../../../scss/sliders/houseProudSlider.scss'

export const HouseProudSlider = (props) => {
    // Slider settings
    const settings = {
        dots: false,
        arrows: false,
        slidesToShow: 4,
        focusOnSelect: true,
        draggable: true,
        infinite: true,
    }

    return (
        <div className={'house-proud-slider-container'}>
            <p className={'house-proud-slider-title'}>House proud? We get it.</p>
            <p className={'house-proud-slider-description'}>Show us how you style your #FURNITURESTOREdesign - tag your photos with @furniturestore for the chance to appear on our site</p>
            <Carousel {...settings} className={'house-proud-slider'}>
                {props.photos.map(p => <HouseProudSlide key={p} photo={p}/>)}
            </Carousel>
        </div>
    )
}

const HouseProudSlide = (props) => {
    return (
        <div className={'house-proud-slide'}>
            <img alt='' src={props.photo}/>
        </div>
    )
}