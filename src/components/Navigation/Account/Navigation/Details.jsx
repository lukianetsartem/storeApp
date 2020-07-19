import React from 'react'
import '../../../../scss/navigation/account/details.scss'
import {DetailsForm} from '../../../Forms/Auth/DetailsForm'

export const Details = () => {
    return (
        <div className={'details-page'}>
            <div className={'account-page-title'}>
                <p>My account</p>
                <span/>
            </div>
            <p className={'details-page-subtitle'}>These are the personal details that we currently hold for you. If you wish to edit, update or add to them, please do so using these fields and save your changes before you move on.</p>
            <DetailsForm/>
        </div>
    )
}