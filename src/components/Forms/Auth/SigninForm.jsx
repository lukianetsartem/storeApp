import React, {useState} from 'react'
import {useForm} from "react-hook-form"
import FacebookIcon from '@material-ui/icons/Facebook'
import '../../../scss/forms/signin.scss'
import {useDispatch} from "react-redux"
import {signIn} from "../../../reducers/auth"
import VisibilityIcon from "@material-ui/icons/Visibility"
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff"

export const SigninForm = () => {
    const dispatch = useDispatch()

    const [visibility, setVisibility] = useState(false)
    // Sign in form
    const {register, handleSubmit, errors, formState} = useForm({mode: "onChange"})
    const onSubmit = (data) => {
        console.log(data)
        // dispatch(signIn(data))
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
                               ref={register({ required: true, maxLength: 25, minLength: 4 })}/>
                        {errors.login && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                    <div className={'sign-form-item'}>
                        <p>Password</p>
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
                    <div className={'sign-form-checkbox'}>
                        <input name="rememberMe" defaultChecked={false} type={'checkbox'} ref={register}/>
                        <p>Remember me</p>
                    </div>
                    <button disabled={!formState.isValid} type={'submit'} className={'login-form-submit'}>
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    )
}