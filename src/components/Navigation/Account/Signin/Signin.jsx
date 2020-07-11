import React from 'react'
import {NavLink} from "react-router-dom"
import {SigninForm} from "../../../Forms/Auth/SigninForm"
import '../../../../scss/navigation/account/signin.scss'

export const Signin = () => {
    return (
        <div className={'sign-page'}>
            <div className={'sign-title'}>
                <p>Welcome to furniture.com</p>
            </div>
            <div className={'sign-page-content'}>
                <SigninForm/>
                <span className={'sign-page-spacer'}/>
                <div className={'sign-redirection'}>
                    <div>
                        <p>New to furniture.com?</p>
                        <NavLink to={'/signup'}>Create an account</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}