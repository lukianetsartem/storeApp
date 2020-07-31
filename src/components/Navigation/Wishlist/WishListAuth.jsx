import {NavLink} from "react-router-dom"
import React from "react"

export const WishListAuth = () => {
    return (
        <div className={'wish-list-auth-banner'}>
            <p>Looking for your saved items?</p>
            <NavLink className={'wish-list-auth-banner-signin'} to={'/signin'}>sign in</NavLink>
            <NavLink className={'wish-list-auth-banner-signup'} to={'/signup'}>create an account</NavLink>
        </div>
    )
}