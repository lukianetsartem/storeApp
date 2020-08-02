import React from 'react'
import '../../../scss/sliders/homeSlider.scss'
import {NavLink} from "react-router-dom"
import 'antd/dist/antd.css'
import firstSlide from "../../../assets/img/firstSlide.jpg"
import secondSlide from "../../../assets/img/secondSlide.jpg"
import thirdSlide from "../../../assets/img/thirdSlide.jpg"
import {Carousel} from 'antd'

export const HomeSlider = () => {
    // Slider settings
    const settings = {
        draggable: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
    }

    return (
        <Carousel className={'home-slider'} {...settings} effect={'fade'}>
            <NavLink to={'/chair'} className={'home-slide'}>
                <img alt={'slide'} src={firstSlide} className={'home-slide-img'}/>
                <div className={'home-slide-description'} id={'first-slide'}>
                    <p className={'home-slide-title'}>Sun city</p>
                    <p className={'home-slide-heading'}>Your urbanan oasis</p>
                    <p className={'home-slide-section-name'}>Shop chairs</p>
                </div>
            </NavLink>
            <NavLink to={'/sofa'}>
                <img alt={'slide'} src={secondSlide} className={'home-slide-img'}/>
                <div className={'home-slide-description'} id={'second-slide'}>
                    <p className={'home-slide-title'}>Take a break</p>
                    <p className={'home-slide-heading'}>Comfort = key</p>
                    <p className={'home-slide-section-name'}>Shop sofas</p>
                </div>
            </NavLink>
            <NavLink to={'/table'}>
                <img alt={'slide'} src={thirdSlide} className={'home-slide-img'}/>
                <div className={'home-slide-description'} id={'third-slide'}>
                    <p className={'home-slide-title'}>Let's dish</p>
                    <p className={'home-slide-heading'}>Talk of the table</p>
                    <p className={'home-slide-section-name'}>Shop tables</p>
                </div>
            </NavLink>
        </Carousel>
    )
}