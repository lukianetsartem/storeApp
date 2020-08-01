import React, {useState} from 'react'
import {NavLink, Redirect} from "react-router-dom"
import {SignupForm} from "../../../Forms/Auth/SignupForm"
import '../../../../scss/navigation/account/signin.scss'
import {useDispatch} from "react-redux"
import {START_SIGN_UP} from "../../../../actions/user"

export const Signup = () => {
    const dispatch = useDispatch()
    const [redirect, setRedirect] = useState(false)
    const signUpSubmit = (data) => {
        dispatch({type: START_SIGN_UP, data: data})
        setRedirect(true)
    }

    if(redirect) return <Redirect to={'/signin'}/>
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
                <SignupForm signUpSubmit={signUpSubmit}/>
            </div>
        </div>
    )
}