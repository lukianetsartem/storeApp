import React, {useEffect} from 'react'
import '../../../../scss/navigation/account/details.scss'
import {DetailsForm} from '../../../Forms/Auth/DetailsForm'
import {useDispatch, useSelector} from "react-redux"
import {getUserData, resetUserData} from "../../../../reducers/auth"

export const Details = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserData())
    }, [])

    const changeData = (data) => {
        dispatch(resetUserData(data))
    }

    const user = useSelector(state => state.user.userDetails)
    console.log(user)

    return (
        <div className={'details-page'}>
            <div className={'page-title'}>
                <p>My account</p>
                <span/>
            </div>
            <p className={'details-page-subtitle'}>These are the personal details that we currently hold for you. If you wish to edit, update or add to them, please do so using these fields and save your changes before you move on.</p>
            <DetailsForm changeData={changeData} user={user}/>
        </div>
    )
}