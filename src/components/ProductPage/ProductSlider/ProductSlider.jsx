import React, {useRef, useState} from 'react'
import '../../../scss/sliders/productSlider.scss'
import {Carousel} from "antd";
import 'antd/dist/antd.css';

export const ProductSlider = (props) => {
    // Setting carousel control
    const [mainSlider, setMainSlider] = useState()
    const [additionalSlider, setAdditionalSlider] = useState()
    const mainProductSlider = useRef()
    const additionalProductSlider = useRef()

    const mainSliderSettings = {
        asNavFor: additionalSlider,
        dots: false,
        draggable: true,
        infinite: true,
    }

    const additionalSliderSettings = {
        asNavFor: mainSlider,
        dots: false,
        arrows: false,
        slidesToShow: 7,
        focusOnSelect: true,
        draggable: false,
        infinite: false,
    }

    return (
        <div>
            <Carousel {...mainSliderSettings} ref={mainProductSlider => setMainSlider(mainProductSlider)} className={'main-product-slider'}>
                {props.photos.map(p => <img src={p} key={p}/>)}
            </Carousel>
            <Carousel {...additionalSliderSettings} ref={additionalProductSlider => setAdditionalSlider(additionalProductSlider)} className={'additional-product-slider'}>
                {props.photos.map(p => <div key={p} className={'additional-product-slide'}>
                    <img src={p}/>
                </div>)}
            </Carousel>
        </div>

    )
}