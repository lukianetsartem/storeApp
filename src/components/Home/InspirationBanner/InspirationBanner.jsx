import {NavLink} from "react-router-dom";
import React from "react";
import '../../../scss/home/inspirationBanner.scss'

export const InspirationBanner = () => {
    const bannerData = {
        title: 'Get inspired',
        description: 'Discover MADE Ideas. Where you can explore inspiring interiors, and get helpful tips and style advice to transform your space. Come on in.',
        picture: 'https://img.made.com/image/upload/c_lfill,d_madeplusgrey.svg,f_auto,g_auto,h_720,q_auto:best,w_720/v1/mws-critical/40a82fae-26d3-4356-a3d3-dccfc6a47f09_LP%2BHP-Desktop-1440x1440%2B2.jpg',
        link: '/inspiration',
    }

    return (
        <div className={'inspiration-banner'}>
            <div className={'inspiration-banner-info'}>
                <div className={'inspiration-banner-content'}>
                    <p className={'inspiration-banner-title'}>{bannerData.title}</p>
                    <p className={'inspiration-banner-description'}>{bannerData.description}</p>
                    <NavLink className={'banner-link'} to={bannerData.link}>Shop now</NavLink>
                </div>
            </div>
            <img alt='banner' src={bannerData.picture}/>
        </div>
    )
}