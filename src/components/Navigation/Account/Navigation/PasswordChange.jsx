import React from 'react'
import '../../../../scss/navigation/account/changePassword.scss'
import {PasswordChangeForm} from "../../../Forms/Auth/PasswordChangeForm"
import {useDispatch, useSelector} from "react-redux"
import {changePassword} from "../../../../reducers/auth"
import {SuccessBanner} from "../../../common/SuccessBanner"

export const PasswordChange = () => {
    const dispatch = useDispatch()
    const changePasswordHandler = (data) => {
        dispatch(changePassword(data))
    }

    const passwordChanged = useSelector(state => state.user.passwordChanged)

    return (
        <div className={'change-password-page'}>
            {passwordChanged && <SuccessBanner text={'Password changed'}/>}
            <div className={'page-title'}>
                <p>Change password</p>
                <span/>
            </div>
            <p className={'details-page-subtitle'}>These are the personal details that we currently hold for you. If you
                wish to edit, update or add to them, please do so using these fields and save your changes before you
                move on.</p>
            <PasswordChangeForm changePasswordHandler={changePasswordHandler}/>
        </div>
    )
}