import React from 'react'
import '../../../scss/home/home.scss'
import {Carousel} from "antd";
import 'antd/dist/antd.css';
import {NavLink} from "react-router-dom";
import firstSlide from "../../../assets/img/firstSlide.jpg"
import secondSlide from "../../../assets/img/secondSlide.jpg"
import thirdSlide from "../../../assets/img/thirdSlide.jpg"

export const HomeSlider = () => {
    const settings = {
        draggable: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
    }

    return (
        <Carousel {...settings} effect="fade">
            <NavLink to={'/chairs'}>
                <img src={firstSlide}/>
                <div className={'slide-description'} id={'first-slide'}>
                    <p className={'slide-title'}>Sun city</p>
                    <p className={'slide-heading'}>Your urban oasis</p>
                    <p className={'slide-section-name'}>Shop chairs</p>
                </div>
            </NavLink>
            <NavLink to={'/sofas'}>
                <img src={secondSlide}/>
                <div className={'slide-description'} id={'second-slide'}>
                    <p className={'slide-title'}>Take a break</p>
                    <p className={'slide-heading'}>Comfort = key</p>
                    <p className={'slide-section-name'}>Shop sofas</p>
                </div>
            </NavLink>
            <NavLink to={'/tables'}>
                <img src={thirdSlide}/>
                <div className={'slide-description'} id={'third-slide'}>
                    <p className={'slide-title'}>Let's dish</p>
                    <p className={'slide-heading'}>Talk of the table</p>
                    <p className={'slide-section-name'}>Shop tables</p>
                </div>
            </NavLink>
        </Carousel>
    )
}