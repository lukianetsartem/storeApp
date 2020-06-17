import React from 'react'
import '../../scss/pageNotFound/pageNotFound.scss'
import {NavLink} from "react-router-dom";

export const NoMatchPage = () => {
    return (
        <div className={'page-not-found'}>
            <div className={'page-not-found-banner'}>
                <p className={'page-not-found-title'}>Whoops</p>
                <p className={'page-not-found-text'}>Sorry, we can't find that page. Try using the Search box below, or click on one of our popular categories further down the page.</p>
            </div>
            <nav className={'page-not-found-nav'}>
                <NavLink to={'/home'}>
                    <img src={'https://res.cloudinary.com/made-com/image/upload/c_pad,d_made.svg,dpr_1.0,f_auto,g_auto,ar_3:2,c_fill,q_auto:best/v1/wysiwyg/homepage_carousel/7806_Newberg_2016_10_28_Carousels.jpg'}/>
                    <p>Home</p>
                </NavLink>
                <NavLink to={'/sofa'}>
                    <img src={'https://res-3.cloudinary.com/made-com/image/upload/d_made.svg,dpr_1.0,g_auto,ar_3:2,c_fill,f_auto,q_auto:best/v1/wysiwyg/showroom/showroom_soho.jpg'}/>
                    <p>Sofas</p>
                </NavLink>
                <NavLink to={'/bed'}>
                    <img src={'https://res-1.cloudinary.com/made-com/image/upload/c_pad,d_made.svg,dpr_1.0,g_auto,ar_3:2,c_fill,f_auto,q_auto:best/v1/wysiwyg/404/32590.jpg'}/>
                    <p>Beds</p>
                </NavLink>
                <NavLink to={'/chair'}>
                    <img src={'https://res-1.cloudinary.com/made-com/image/upload/c_pad,d_made.svg,dpr_1.0,g_auto,ar_3:2,c_fill,f_auto,q_auto:best/v1/catalog/product/b/o/boone_chairs_white_pl.jpg'}/>
                    <p>Chairs</p>
                </NavLink>
            </nav>
        </div>
    )
}