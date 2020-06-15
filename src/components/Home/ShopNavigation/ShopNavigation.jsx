import React from 'react'
import {NavLink} from "react-router-dom";
import '../../../scss/home/shopNavigation.scss'

export const ShopNavigation = () => {
    return (
        <div className={'shop-navigation'}>
            <nav className={'shop-navigation-nav'}>
                <p className={'shop-navigation-title'}>Shop By Category</p>
                <NavLink to={'/sofas'}>Sofas</NavLink>
                <NavLink to={'/chairs'}>Chairs</NavLink>
                <NavLink to={'/tables'}>Tables</NavLink>
                <NavLink to={'/beds'}>Beds</NavLink>
            </nav>
            <div className={'shop-navigation-image'}>
                <img src={'https://img.made.com/image/upload/c_lfill,d_madeplusgrey.svg,f_auto,g_auto,h_375,q_auto:best,w_300/v1/mws-critical/85d1fbe22f5bba406004b7d3cd09232e3f98d9ef_d39122aa-6d15-4d32-a99f-31862efb2dfe_category.jpg'}/>
            </div>
            <nav className={'shop-navigation-nav'}>
                <p className={'shop-navigation-title'}>Shop By Category</p>
                <NavLink to={'/storage'}>Storage</NavLink>
                <NavLink to={'/lightning'}>Lightning</NavLink>
                <NavLink to={'/accessories'}>Accessories</NavLink>
                <NavLink to={'/garden'}>Garden</NavLink>
            </nav>
        </div>
    )
}