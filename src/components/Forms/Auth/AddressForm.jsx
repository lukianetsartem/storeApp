import React from 'react'
import '../../../scss/forms/address.scss'
import {useDispatch} from "react-redux"
import {useForm} from "react-hook-form"
import CloseIcon from '@material-ui/icons/Close'

export const AddressForm = (props) => {
    const dispatch = useDispatch()

    // Add address form
    const {register, handleSubmit, errors, formState} = useForm({mode: "onChange"})
    const onSubmit = (data) => {
        // dispatch()
        console.log(data)
    }

    return (
        <div className={'address-form'}>
            <form className={'address-form-content'}>
                <div className={'address-form-title'}>
                    <p>Enter your new address</p>
                    <span/>
                </div>
                <p className={'address-form-subtitle'}>Please note that changes to delivery addresses will not affect current orders.</p>
                <div className={'address-form-section-double'}>
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
                               style={errors.firstName && {borderColor: '#CC4b4b'}}
                               ref={register({required: true, maxLength: 30, minLength: 2, pattern: /^[A-Za-z]+$/})}/>
                        {errors.firstName && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                </div>
                <div className={'address-form-section-signle'}>
                    <div className={'sign-form-item'}>
                        <p>Address</p>
                        <input name="address"
                               placeholder={'Example str, home 2, flat 20'}
                               style={errors.firstName && {borderColor: '#CC4b4b'}}
                               ref={register({required: true, maxLength: 30, minLength: 2, pattern: /^[A-Za-z]+$/})}/>
                        {errors.firstName && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                </div>
                <div className={'address-form-section-signle'}>
                    <div className={'sign-form-item'}>
                        <p>Town / City</p>
                        <input name="city"
                               placeholder={'Example'}
                               style={errors.firstName && {borderColor: '#CC4b4b'}}
                               ref={register({required: true, maxLength: 30, minLength: 2, pattern: /^[A-Za-z]+$/})}/>
                        {errors.firstName && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                </div>
                <div className={'address-form-section-signle'}>
                    <div className={'sign-form-item'}>
                        <p>Country</p>
                        <input name="country"
                               placeholder={'Example'}
                               style={errors.firstName && {borderColor: '#CC4b4b'}}
                               ref={register({required: true, maxLength: 30, minLength: 2, pattern: /^[A-Za-z]+$/})}/>
                        {errors.firstName && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                </div>
                <div className={'address-form-section-double'}>
                    <div className={'sign-form-item'}>
                        <p>Postcode</p>
                        <input name="postcode"
                               style={errors.firstName && {borderColor: '#CC4b4b'}}
                               ref={register({required: true, maxLength: 30, minLength: 2, pattern: /[^0-9]/g})}/>
                        {errors.firstName && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                </div>
                <div className={'address-form-section-signle'}>
                    <div className={'sign-form-item'}>
                        <p>Telephone</p>
                        <input name="phone"
                               placeholder={'07400 123456'}
                               style={errors.firstName && {borderColor: '#CC4b4b'}}
                               ref={register({required: true, maxLength: 30, minLength: 2, pattern: /[^0-9]/g})}/>
                        {errors.firstName && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                </div>
                <CloseIcon onClick={() => props.setVisibility(false)} className={'address-form-close-icon'}/>
                <div className={'address-form-control'}>
                    <button onClick={() => props.setVisibility(false)} className={'address-form-control-cancel'}>
                        Cancel
                    </button>
                    <button disabled={!formState.isValid} type={'submit'} className={'address-form-control-submit'}>
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}
