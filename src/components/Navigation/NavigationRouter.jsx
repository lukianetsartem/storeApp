import React from "react"
import {Route} from "react-router-dom"
import {Account} from "./Account/Account"
import {Wishlist} from "./Wishlist/Wishlist"
import {Showroom} from "./Showrom/Showroom"
import {PasswordChange} from "./Account/Navigation/PasswordChange"
import {Details} from "./Account/Navigation/Details"
import {Address} from "./Account/Navigation/Address"
import {Payment} from "./Account/Navigation/Payment"
import {Signup} from "./Account/Auth/Signup"
import {Signin} from "./Account/Auth/Signin"
import {Cart} from "./Cart/Cart"
import {Help} from "./Help/Help"
import {Style} from "./Account/Style/Style"
import {Result} from "./Account/Style/Result"

export const NavigationRouter = () => {
    return (
        <div>
            <Route path={'/customer/address'} render={() => <Address/>}/>
            <Route path={'/customer/details/'} render={() => <Details/>}/>
            <Route path={'/customer/payment-methods'} render={() => <Payment/>}/>

            <Route path={'/showroom'} render={() => <Showroom/>}/>
            <Route path={'/help'} render={() => <Help/>}/>

            <Route path={'/customer/account'} render={() => <Account/>}/>
            <Route path={'/customer/change-password'} render={() => <PasswordChange/>}/>
            <Route path={'/signup'} render={() => <Signup/>}/>
            <Route path={'/signin'} render={() => <Signin/>}/>

            <Route path={'/customer/wishlist'} render={() => <Wishlist/>}/>
            <Route path={'/customer/cart'} render={() => <Cart/>}/>

            <Route path={'/customer/find-your-style'} render={() => <Style/>}/>
            <Route path={'/customer/your-style'} render={() => <Result/>}/>
        </div>
    )
}