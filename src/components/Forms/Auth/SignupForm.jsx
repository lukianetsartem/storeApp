import React, {useState} from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import {useDispatch} from "react-redux"
import {useForm} from "react-hook-form"
import '../../../scss/forms/signin.scss'
import {signUp} from "../../../reducers/auth"
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'

export const SignupForm = (props) => {
    const [visibility, setVisibility] = useState(false)

    // Sign up form
    const {register, handleSubmit, errors, formState} = useForm({mode: "onChange"})

    const onSubmit = (data) => {
        props.signUpSubmit(data)
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
                               ref={register({required: true, maxLength: 25, minLength: 4})}/>
                        {errors.login && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                    <div className={'sign-form-item'}>
                        <p>First Name</p>
                        <input name="firstName"
                               placeholder={'Example'}
                               style={errors.firstName && {borderColor: '#CC4b4b'}}
                               ref={register({required: true, maxLength: 30, minLength: 2, pattern: /^[A-Za-z]+$/})}/>
                        {errors.firstName && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                    <div className={'sign-form-item'}>
                        <p>Last Name</p>
                        <input name="lastName"
                               placeholder={'Example'}
                               style={errors.lastName && {borderColor: '#CC4b4b'}}
                               ref={register({required: true, maxLength: 30, minLength: 2, pattern: /^[A-Za-z]+$/})}/>
                        {errors.lastName && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                    <div className={'sign-form-item'}>
                        <p>Email</p>
                        <input name="email"
                               placeholder={'example@domain.com'}
                               style={errors.email && {borderColor: '#CC4b4b'}}
                               ref={register({
                                   required: true,
                                   minLength: 10,
                                   maxLength: 30,
                                   pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                               })}/>
                        {errors.email && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                    <div className={'sign-form-item'}>
                        <p>Password</p>
                        <input name="password"
                               type={!visibility ? "password" : undefined}
                               style={errors.password && {borderColor: '#CC4b4b'}}
                               ref={register({required: true, maxLength: 15, minLength: 4})}/>
                        {errors.password && <p className={'sign-form-error'}>This is required</p>}
                        <div className={'password-visibility-icon-container'}>
                            {visibility &&
                            <VisibilityIcon onClick={() => setVisibility(false)} className={'password-visibility-icon visible-icon'}/>}
                            {!visibility &&
                            <VisibilityOffIcon onClick={() => setVisibility(true)} className={'password-visibility-icon'}/>}
                        </div>
                    </div>
                    <div className={'sign-form-checkbox'}>
                        <input name="promotions" defaultChecked={true} type={'checkbox'} ref={register}/>
                        <p>I'd like furniture.com to send me exclusive promotions, discounts and trends and consent to
                            capture of my interactions with such content. I can opt out of receiving these
                            communications at any time</p>
                    </div>
                    <button disabled={!formState.isValid} type={'submit'} className={'login-form-submit'}>
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    )
}