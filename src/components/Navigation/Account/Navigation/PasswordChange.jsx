import React from 'react'
import '../../../../scss/navigation/account/details.scss'
import {DetailsForm} from '../../../Forms/Auth/DetailsForm'
import {PasswordChangeForm} from "../../../Forms/Auth/PasswordChangeForm";

export const PasswordChange = () => {
    return (
        <div className={'details-page'}>
            <div className={'account-page-title'}>
                <p>Change password</p>
                <span/>
            </div>
            <p className={'details-page-subtitle'}>These are the personal details that we currently hold for you. If you wish to edit, update or add to them, please do so using these fields and save your changes before you move on.</p>
            <PasswordChangeForm/>
        </div>
    )
}