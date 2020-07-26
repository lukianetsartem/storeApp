import React, {useState} from 'react'
import {NavLink, Redirect} from "react-router-dom"
import {SigninForm} from "../../../Forms/Auth/SigninForm"
import '../../../../scss/navigation/account/signin.scss'
import {useDispatch, useSelector} from "react-redux"
import {signIn} from "../../../../reducers/auth"
import {SuccessBanner} from "../../../common/SuccessBanner";

export const Signin = () => {
    const dispatch = useDispatch()

    const [redirect, setRedirect] = useState(false)
    const signInSubmit = (data) => {
        dispatch(signIn(data))
        setRedirect(true)
    }

    const isAuth = useSelector(state => state.user.isAuth)
    const signupSuccess = useSelector(state => state.user.signupSuccess)

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