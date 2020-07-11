import React from 'react'
import {SigninForm} from "../../../Forms/Auth/SigninForm"
import {NavLink} from "react-router-dom"
import '../../../../scss/navigation/account/signin.scss'

export const Signin = () => {
    return (
        <div className={'sign-in-page'}>
            <div>
                <p className={'sign-in-title'}>Welcome to furniture.com</p>
            </div>
            <div>
                <SigninForm/>
                <div>
                    <p>New to furniture.com?</p>
                    <NavLink to={'/signup'}>Create an account</NavLink>
                </div>
            </div>
        </div>
    )
}