import React from 'react'
import {useForm} from "react-hook-form"
import FacebookIcon from '@material-ui/icons/Facebook'
import '../../../scss/forms/login.scss'

export const Signin = () => {
    // Login form
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <div className={'signin-form-header'}>
                <p className={'signin-form-title'}>Sign in</p>
                <button className={'signin-form-facebook'}>
                    <FacebookIcon className={'signin-form-facebook-icon'}/>
                    <p>sign via facebook</p>
                </button>
                <div>
                    <span></span>
                    <p>or</p>
                    <span></span>
                </div>
            </div>
            <form className={'signin-form'} onSubmit={handleSubmit(onSubmit)}>
                <div className={'signin-form-item'}>
                    <p>Login</p>
                    <input name="login" placeholder={'Login'} ref={register}/>
                </div>
                <div className={'signin-form-item'}>
                    <p>Password</p>
                    <input name="password" placeholder={'Password'} ref={register}/>
                </div>
                <button type={'submit'} className={'login-form-submit'}>
                    Sign in
                </button>
            </form>
        </div>
    )
}