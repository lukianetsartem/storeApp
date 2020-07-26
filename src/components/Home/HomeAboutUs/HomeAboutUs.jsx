import React from 'react'
import '../../../scss/home/homeAboutUs.scss'
import {NavLink} from "react-router-dom"

export const HomeAboutUs = () => {
    return (
        <div className={'home-about-us'}>
            <div className={'home-about-us-content'}>
                <img alt={''} src={'https://img.made.com/image/upload/c_lfill,d_madeplusgrey.svg,f_auto,g_auto,h_720,q_auto:best,w_720/v1/mws-critical/b1a276d9-a517-4fd4-9699-22ce039901d9_TL6_HP_POD_1000%2Bx%2B994px.jpg'} />
                <div className={'home-about-us-content'}>
                    <p className={'home-about-us-title'}>About us</p>
                    <p className={'home-about-us-description'}>High-end design, without the high-end price tag? That's kind of our thing. We work directly with independent designers and makers to create pieces you'll love, that are MADE to last – and won't break the bank.</p>
                    <NavLink to={'/about-us'}>Learn More</NavLink>
                </div>
            </div>
        </div>
    )
}