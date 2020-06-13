import {NavLink} from "react-router-dom"
import React from "react"
import '../../scss/header/header.scss'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/Person';

export const SecondaryArea = () => {
    return (
        <div className={'secondary-area'}>
            <div className={'secondary-area-content'}>
                <NavLink to={`/showrooms`} className={'secondary-area-item'}>
                    <LocationOnIcon className={'close-icon'}/>
                    <p className={'secondary-area-title'}>showroom</p>
                </NavLink>
            </div>
            <div className={'secondary-area-content'}>
                <NavLink to={`/help`} className={'secondary-area-item'}>
                    <HelpOutlineIcon className={'close-icon'}/>
                    <p className={'secondary-area-title'}>faq</p>
                </NavLink>
            </div>
            <div className={'secondary-area-content'}>
                <NavLink to={`/account`} className={'secondary-area-item'}>
                    <PersonIcon className={'close-icon'}/>
                    <p className={'secondary-area-title'}>account</p>
                </NavLink>
            </div>
            <div className={'secondary-area-content'}>
                <NavLink to={`/wishlist`} className={'secondary-area-item'}>
                    <FavoriteBorderIcon className={'close-icon'}/>
                    <p className={'secondary-area-title'}>wishlist</p>
                </NavLink>
            </div>
            <div className={'secondary-area-content'}>
                <NavLink to={`/basket`} className={'secondary-area-item'}>
                    <ShoppingBasketIcon className={'close-icon'}/>
                    <p className={'secondary-area-title'}>basket</p>
                </NavLink>
            </div>
        </div>
    )
}