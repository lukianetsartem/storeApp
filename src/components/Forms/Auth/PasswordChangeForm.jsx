import React, {useState} from 'react'
import {useForm} from "react-hook-form"
import '../../../scss/forms/signin.scss'
import '../../../scss/forms/details.scss'
import {useDispatch} from "react-redux"
import VisibilityIcon from "@material-ui/icons/Visibility"
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff"

export const PasswordChangeForm = () => {
    const dispatch = useDispatch()
    const [visibility, setVisibility] = useState(false)

    // Change password form
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
                        <p>Current password</p>
                        <input name="currentPassword"
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
                    <div className={'sign-form-item'}>
                        <p>New password</p>
                        <input name="newPassword"
                               type={!visibility ? "password" : undefined}
                               style={errors.password && {borderColor: '#CC4b4b'}}
                               ref={register({ required: true, maxLength: 15, minLength: 4 })}/>
                        {errors.password && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                    <button disabled={!formState.isValid} type={'submit'} className={'login-form-submit'}>
                        Apply changes
                    </button>
                </form>
            </div>
        </div>
    )
}