import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {NavLink, Redirect, Route} from "react-router-dom"
import {Preloader} from "../../common/Preloader/Preloader"
import {getUserData} from "../../../reducers/auth"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AssignmentIcon from '@material-ui/icons/Assignment'
import HomeIcon from '@material-ui/icons/Home'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import StyleIcon from '@material-ui/icons/Style'
import '../../../scss/navigation/account/account.scss'

export const Account = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserData())
    }, [])

    // Getting data from state
    const isAuth = useSelector(state => state.user.isAuth)
    const isDataLoaded = useSelector(state => state.user.isDataLoaded)
    const user = useSelector(state => state.user.user)

    console.log(isAuth)

    // Checking if user is authorized
    if (!isAuth) return <Redirect to={'/signin'}/>
    // Checking if user data is loaded
    if (!isDataLoaded) return <Preloader/>
    return (
        <div className={'account-page'}>
            <div className={'account-page-title'}>
                <p>My account</p>
                <span/>
            </div>
            <p className={'account-page-subtitle'}>Hello, Artem</p>
            <div className={'account-page-nav-item'}>
                <div className={'account-page-nav-item-icon'}>
                    <ShoppingCartIcon className={'account-page-icon'}/>
                </div>
                <div className={'account-page-nav-item-description'}>
                    <NavLink to={'/customer/cart'}>My cart</NavLink>
                    <p>Watch products, that you put into your cart.</p>
                </div>
            </div>
            <div className={'account-page-nav-item'}>
                <div className={'account-page-nav-item-icon'}>
                    <AssignmentIcon className={'account-page-icon'}/>
                </div>
                <div className={'account-page-nav-item-description'}>
                    <NavLink to={'/customer/details'}>My details</NavLink>
                    <p>Edit your name, email address and password.</p>
                </div>
            </div>
            <div className={'account-page-nav-item'}>
                <div className={'account-page-nav-item-icon'}>
                    <StyleIcon className={'account-page-icon'}/>
                </div>
                <div className={'account-page-nav-item-description'}>
                    <NavLink to={'/customer/find-your-style'}>Find your style</NavLink>
                    <p>Find your favorite furniture style.</p>
                </div>
            </div>
            <div className={'account-page-nav-item'}>
                <div className={'account-page-nav-item-icon'}>
                    <HomeIcon className={'account-page-icon'}/>
                </div>
                <div className={'account-page-nav-item-description'}>
                    <NavLink to={'/customer/address'}>My address book</NavLink>
                    <p>Edit your addresses or add a new one.</p>
                </div>
            </div>
            <div className={'account-page-nav-item'}>
                <div className={'account-page-nav-item-icon'}>
                    <CreditCardIcon className={'account-page-icon'}/>
                </div>
                <div className={'account-page-nav-item-description'}>
                    <NavLink to={'/customer/payment-methods'}>My payment methods</NavLink>
                    <p>View your list of saved cards with the option to delete.</p>
                </div>
            </div>
            <button className={'account-page-logout-button'}>Log out</button>
        </div>
    )
}