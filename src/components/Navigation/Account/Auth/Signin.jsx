import React, {useState} from 'react'
import {NavLink, Redirect} from "react-router-dom"
import {SigninForm} from "../../../Forms/Auth/SigninForm"
import '../../../../scss/navigation/signin.scss'
import {useDispatch, useSelector} from "react-redux"
import {SuccessBanner} from "../../../common/SuccessBanner"
import {START_SIGN_IN} from "../../../../actions/user"

export const Signin = () => {
    const dispatch = useDispatch()

    const signInSubmit = (data) => {
        dispatch({type: START_SIGN_IN, data: data})
    }

    const isAuth = useSelector(state => state.user.isAuth)
    const signupSuccess = useSelector(state => state.user.signupSuccess)
    const signinSuccess = useSelector(state => state.user.signinSuccess)

    const [redirect] = useState(signinSuccess)

    if(isAuth || redirect) return <Redirect to={'/customer/account'}/>
    return (
        <div className={'sign-page'}>
            {signupSuccess && <SuccessBanner text={'Sign up success, please sign in.'}/>}
            <div className={'sign-title'}>
                <p>Welcome to furniture.com</p>
            </div>
            <div className={'sign-page-content'}>
                <SigninForm signInSubmit={signInSubmit}/>
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