import React from 'react'
import {useForm} from "react-hook-form"
import FacebookIcon from '@material-ui/icons/Facebook'
import '../../../scss/forms/signin.scss'

export const SignupForm = () => {
    // Sign up form
    const {register, handleSubmit, errors} = useForm()
    const onSubmit = (data) => {
        console.log(data)
        console.log(errors)
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
                        <p>First Name</p>
                        <input name="firstName"
                               placeholder={'Example'}
                               style={errors.firstName && {borderColor: '#CC4b4b'}}
                               ref={register({ required: true, maxLength: 30, minLength: 2 })}/>
                        {errors.firstName && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                    <div className={'sign-form-item'}>
                        <p>Last Name</p>
                        <input name="lastName"
                               placeholder={'Example'}
                               style={errors.lastName && {borderColor: '#CC4b4b'}}
                               ref={register({ required: true, maxLength: 30, minLength: 2 })}/>
                        {errors.lastName && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                    <div className={'sign-form-item'}>
                        <p>Email</p>
                        <input name="email"
                               placeholder={'example@domain.com'}
                               style={errors.email && {borderColor: '#CC4b4b'}}
                               ref={register({ required: true, minLength: 10, maxLength: 30, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ })}/>
                        {errors.email && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                    <div className={'sign-form-item'}>
                        <p>Password</p>
                        <input name="password"
                               type={"password"}
                               style={errors.password && {borderColor: '#CC4b4b'}}
                               ref={register({ required: true, maxLength: 15, minLength: 5 })}/>
                        {errors.password && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                    <div className={'sign-form-checkbox'}>
                        <input name="promotions" defaultChecked={true} type={'checkbox'} ref={register}/>
                        <p>I'd like Made.com to send me exclusive promotions, discounts and trends and consent to capture of my interactions with such content. I can opt out of receiving these communications at any time</p>
                    </div>
                    <div className={'sign-form-remember-checkbox'}>
                        <input name="rememberMe" type={'checkbox'} ref={register}/>
                        <p>Remember me</p>
                    </div>
                    <button type={'submit'} className={'login-form-submit'}>
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    )
}