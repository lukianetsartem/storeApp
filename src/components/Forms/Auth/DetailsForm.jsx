import React, {useState} from 'react'
import {useForm} from "react-hook-form"
import '../../../scss/forms/signin.scss'
import '../../../scss/forms/details.scss'
import {useDispatch} from "react-redux"
import VisibilityIcon from "@material-ui/icons/Visibility"
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff"
import {NavLink} from "react-router-dom"

export const DetailsForm = () => {
    const dispatch = useDispatch()
    const [visibility, setVisibility] = useState(false)

    // Change details form
    const {register, handleSubmit, errors, formState} = useForm({mode: "onChange"})
    const onSubmit = (data) => {
        // dispatch()
        console.log(data)
    }

    return (
        <div className={'details-form'}>
            <div className={'sign-form-content'}>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        <p>Current password</p>
                        <input name="password"
                               type={!visibility ? "password" : undefined}
                               style={errors.password && {borderColor: '#CC4b4b'}}
                               ref={register({ required: true, maxLength: 15, minLength: 4 })}/>
                        {errors.password && <p className={'sign-form-error'}>This is required</p>}
                        <div className={'password-visibility-icon-container'}>
                            {visibility &&
                            <VisibilityIcon onClick={() => setVisibility(false)} className={'password-visibility-icon visible-icon'}/>}
                            {!visibility &&
                            <VisibilityOffIcon onClick={() => setVisibility(true)} className={'password-visibility-icon'}/>}
                        </div>
                    </div>
                    <div className={'details-form-change-password'}>
                        <NavLink to={'/customer/change-password'}>Change password?</NavLink>
                    </div>
                    <button disabled={!formState.isValid} type={'submit'} className={'login-form-submit'}>
                        Apply changes
                    </button>
                </form>
            </div>
        </div>
    )
}