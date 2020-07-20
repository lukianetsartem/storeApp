import React, {useRef, useState} from 'react'
import '../../../../scss/sliders/productSlider.scss'
import {Carousel} from "antd"
import 'antd/dist/antd.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

export const ResultSlider = (props) => {
    // Custom arrows
    const PrevArrow = (props) => {
        return (
            <div className={'result-slider-prev'}>
                <ArrowForwardIosIcon className={'product-slider-prev-arrow'} onClick={props.onClick}/>
            </div>
        )
    }
    const NextArrow = (props) => {
        return (
            <div className={'result-slider-next'} onClick={props.onClick}>
                <ArrowForwardIosIcon/>
            </div>
        )
    }

    const settings = {
        dots: false,
        draggable: true,
        infinite: true,
        arrows: true,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>
    }

    return (
        <div>
            <Carousel {...settings} effect={"fade"} className={'result-slider'}>
                {props.photos.map(p => <img src={p} key={p}/>)}
            </Carousel>
        </div>
    )
}
