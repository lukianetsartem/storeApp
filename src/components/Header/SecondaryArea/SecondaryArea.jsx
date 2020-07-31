import {NavLink} from "react-router-dom"
import React from "react"
import '../../../scss/header/header.scss'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

export const SecondaryArea = (props) => {
    return (
        <div className={'secondary-area'}>
            <div className={'secondary-area-content'} id={'account-link'}>
                <NavLink to={`/showrooms`} className={'secondary-area-item'}>
                    <LocationOnOutlinedIcon className={'secondary-area-icon'}/>
                    <p className={'secondary-area-title'}>showroom</p>
                </NavLink>
            </div>
            <div className={'secondary-area-content'}>
                <NavLink to={`/help`} className={'secondary-area-item'}>
                    <HelpOutlineIcon className={'secondary-area-icon'}/>
                    <p className={'secondary-area-title'}>faq</p>
                </NavLink>
            </div>
            <div className={'secondary-area-content'} id={'account-link'}>
                <NavLink to={`/customer/account`} className={'secondary-area-item'}>
                    <PersonOutlineOutlinedIcon className={'secondary-area-icon'}/>
                    <p className={'secondary-area-title'}>account</p>
                </NavLink>
                {props.isAuth && <div className={'secondary-area-dropdown'}>
                    <div className={'secondary-area-dropdown-content'}>
                        <NavLink to={'/customer/account'}>My Account</NavLink>
                        <NavLink to={'/customer/find-your-style'}>My Style</NavLink>
                        <NavLink to={'/cart'}>My Cart</NavLink>
                        <NavLink to={'/customer/details'}>My Details</NavLink>
                        <NavLink to={'/customer/address'}>My Address Book</NavLink>
                    </div>
                </div>}
            </div>
            <div className={'secondary-area-content'}>
                <NavLink to={`/cart`} className={'secondary-area-item'}>
                    <ShoppingCartOutlinedIcon className={'secondary-area-icon'}/>
                    <p className={'secondary-area-title'}>cart</p>
                </NavLink>
            </div>
            <div className={'secondary-area-content'}>
                <NavLink to={`/wishlist`} className={'secondary-area-item'}>
                    <FavoriteBorderIcon className={'secondary-area-icon'}/>
                    <p className={'secondary-area-title'}>wishlist</p>
                </NavLink>
            </div>
        </div>
    )
}