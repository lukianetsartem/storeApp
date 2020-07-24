import React from 'react'
import '../../../scss/forms/address.scss'
import {useForm} from "react-hook-form"
import CloseIcon from '@material-ui/icons/Close'

export const AddressForm = (props) => {
    const address = props.address

    // Add address form
    const {register, handleSubmit, errors} = useForm()
    const onSubmit = (data) => {
        props.setAddress(data)
    }

    return (
        <div className={'address-form'}>
            <form onSubmit={handleSubmit(onSubmit)} className={'address-form-content'}>
                <div className={'address-form-title'}>
                    <p>{props.title}</p>
                    <span/>
                </div>
                <p className={'address-form-subtitle'}>Please note that changes to delivery addresses will not affect
                    current orders.</p>
                <div className={'address-form-section-double'}>
                    <div className={'sign-form-item'}>
                        <p>First Name</p>
                        <input name="firstName"
                               defaultValue={address && address.firstName}
                               placeholder={'Example'}
                               style={errors.firstName && {borderColor: '#CC4b4b'}}
                               ref={register({required: true, maxLength: 30, minLength: 2, pattern: /^[A-Za-z]+$/})}/>
                        {errors.firstName && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                    <div className={'sign-form-item'}>
                        <p>Last Name</p>
                        <input name="lastName"
                               defaultValue={address && address.lastName}
                               placeholder={'Example'}
                               style={errors.lastName && {borderColor: '#CC4b4b'}}
                               ref={register({required: true, maxLength: 30, minLength: 2, pattern: /^[A-Za-z]+$/})}/>
                        {errors.lastName && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                </div>
                <div className={'address-form-section-signle'}>
                    <div className={'sign-form-item'}>
                        <p>Address</p>
                        <input name="address"
                               defaultValue={address && address.address}
                               placeholder={'Example str, home 2, flat 20'}
                               style={errors.address && {borderColor: '#CC4b4b'}}
                               ref={register({required: true, maxLength: 60, minLength: 2})}/>
                        {errors.address && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                </div>
                <div className={'address-form-section-signle'}>
                    <div className={'sign-form-item'}>
                        <p>Town / City</p>
                        <input name="town"
                               defaultValue={address && address.town}
                               placeholder={'Example'}
                               style={errors.town && {borderColor: '#CC4b4b'}}
                               ref={register({required: true, maxLength: 30, minLength: 2, pattern: /^[A-Za-z]+$/})}/>
                        {errors.town && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                </div>
                <div className={'address-form-section-signle'}>
                    <div className={'sign-form-item'}>
                        <p>Country</p>
                        <input name="country"
                               defaultValue={address && address.country}
                               placeholder={'Example'}
                               style={errors.country && {borderColor: '#CC4b4b'}}
                               ref={register({required: true, maxLength: 30, minLength: 2, pattern: /^[A-Za-z]+$/})}/>
                        {errors.country && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                </div>
                <div className={'address-form-section-double'}>
                    <div className={'sign-form-item'}>
                        <p>Postcode</p>
                        <input name="postcode"
                               defaultValue={address && address.postcode}
                               style={errors.postcode && {borderColor: '#CC4b4b'}}
                               ref={register({required: true, maxLength: 8, minLength: 2})}/>
                        {errors.postcode && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                </div>
                <div className={'address-form-section-signle'}>
                    <div className={'sign-form-item'}>
                        <p>Telephone</p>
                        <input name="telephone"
                               defaultValue={address && address.telephone}
                               placeholder={'07400 12345'}
                               style={errors.phone && {borderColor: '#CC4b4b'}}
                               ref={register({required: true, maxLength: 20, minLength: 2})}/>
                        {errors.phone && <p className={'sign-form-error'}>This is required</p>}
                    </div>
                </div>
                <CloseIcon onClick={() => props.setVisibility(false)} className={'address-form-close-icon'}/>
                <div className={'address-form-control'}>
                    <button onClick={() => props.setVisibility(false)} className={'address-form-control-cancel'}>
                        Cancel
                    </button>
                    <button type={'submit'} className={'address-form-control-submit'}>
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}