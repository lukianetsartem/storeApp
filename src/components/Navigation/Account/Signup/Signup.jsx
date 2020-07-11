import React from 'react'
import {NavLink} from "react-router-dom"
import {SignupForm} from "../../../Forms/Auth/SignupForm"
import '../../../../scss/navigation/account/signin.scss'

export const Signup = () => {
    return (
        <div className={'sign-page'}>
            <div className={'sign-title'}>
                <p>Welcome to furniture.com</p>
            </div>
            <div className={'sign-page-content'}>
                <div className={'sign-redirection'}>
                    <div>
                        <p>Sign in</p>
                        <NavLink to={'/signin'}>I have an account</NavLink>
                    </div>
                </div>
                <span className={'sign-page-spacer-high'}/>
                <SignupForm/>
            </div>
        </div>
    )
}