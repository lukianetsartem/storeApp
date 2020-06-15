import React from 'react'
import {useForm} from "react-hook-form";
import '../../../scss/forms/subscribeForm.scss'

export const SubscribeForm = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className={'subscribe-form-container'}>
            <div className={'subscribe-form'}>
                <div className={'subscribe-form-text'}>
                    <div>
                        <p className={'subscribe-form-title'}>Join our newsletter for £10 off</p>
                        <p className={'subscribe-form-description'}>We'll email you a voucher worth £10 off your first order over £50. By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="email" placeholder={'Enter email'} ref={register}/>
                    <label>
                        <input type={'submit'}></input>
                        <div type={'submit'} className={'subscribe-form-submit'}>
                            <p>Go</p>
                        </div>
                    </label>
                </form>
            </div>
        </div>
    )
}