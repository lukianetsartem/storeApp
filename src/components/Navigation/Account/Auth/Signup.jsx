import React from 'react'
import {NavLink} from "react-router-dom"
import {SignupForm} from "../../../Forms/Auth/SignupForm"
import '../../../../scss/navigation/account/signin.scss'
import {useDispatch, useSelector} from "react-redux"
import {signUp} from "../../../../reducers/auth"
import {SuccessBanner} from "../../../common/SuccessBanner"

export const Signup = () => {
    const dispatch = useDispatch()

    const signUpSubmit = (data) => {
        dispatch(signUp(data))
    }

    const signupSuccess = useSelector(state => state.user.signupSuccess)

    return (
        <div className={'sign-page'}>
            {signupSuccess && <SuccessBanner text={'Sign up success, please sign in'}/>}
            <div className={'sign-title'}>
                <p>Welcome to furniture.com</p>
            </div>
            <div className={'sign-page-content'}>
                <div className={'sign-redirection'}>
                    <div>
                        <p>Sign up</p>
                        <NavLink to={'/signin'}>I have an account</NavLink>
                    </div>
                </div>
                <span className={'sign-page-spacer-high'}/>
                <SignupForm signUpSubmit={signUpSubmit}/>
            </div>
        </div>
    )
}