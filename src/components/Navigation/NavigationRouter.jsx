import React from "react"
import {Route} from "react-router-dom"
import {Account} from "./Account/Account"
import {Cart} from "./Cart/Cart"
import {Wishlist} from "./Wishlist/Wishlist"
import {Showroom} from "./Showrom/Showroom"
import {Help} from "./Help/Help"
import {Signin} from "./Account/Signin/Signin"
import {Signup} from "./Account/Signup/Signup"

export const NavigationRouter = () => {
    return (
        <div>
            <Route path={'/showroom'} render={() => <Showroom/>}/>
            <Route path={'/help'} render={() => <Help/>}/>
            <Route path={'/account'} render={() => <Account/>}/>
            <Route path={'/signup'} render={() => <Signup/>}/>
            <Route path={'/signin'} render={() => <Signin/>}/>
            <Route path={'/wishlist'} render={() => <Wishlist/>}/>
            <Route path={'/cart'} render={() => <Cart/>}/>
        </div>
    )
}