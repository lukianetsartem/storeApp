import React from 'react'
import {useForm} from "react-hook-form"
import FacebookIcon from '@material-ui/icons/Facebook'
import '../../../scss/forms/signin.scss'

export const SigninForm = () => {
    // Sign in form
    const {register, handleSubmit, errors} = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className={'sign-form'}>
            <div className={'sign-form-content'}>
                <div className={'sign-form-header'}>
                    <p className={'sign-form-title'}>Sign in</p>
                    <button className={'sign-form-facebook'}>
                        <FacebookIcon className={'sign-form-facebook-icon'}/>
                        <p>sign via facebook</p>
                    </button>
                    <div className={'sign-spacing'}>
                        <span/><p>or</p><span/>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={'sign-form-item'}>
                        <p>Username</p>
                        <input name="login"
                               placeholder={'Example'}
                               style={errors.login && {borderColor: '#CC4b4b'}}
                               ref={register({ required: true, maxLength: 25, minLength: 5 })}/>
                        {errors.login && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                    <div className={'sign-form-item'}>
                        <p>Password</p>
                        <input name="password"
                               type={"password"}
                               style={errors.password && {borderColor: '#CC4b4b'}}
                               ref={register({ required: true, maxLength: 15, minLength: 5 })}/>
                        {errors.password && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                    <button type={'submit'} className={'login-form-submit'}>
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    )
}