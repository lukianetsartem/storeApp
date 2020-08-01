import React, {useEffect} from 'react'
import '../../../../scss/navigation/account/details.scss'
import {DetailsForm} from '../../../Forms/Auth/DetailsForm'
import {useDispatch, useSelector} from "react-redux"
import {SuccessBanner} from "../../../common/SuccessBanner"
import {LOAD_GET_USER_DATA, LOAD_SET_USER_DATA} from "../../../../actions/user"

export const Details = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: LOAD_GET_USER_DATA})
    }, [dispatch])

    const changeData = (data) => {
        dispatch({type: LOAD_SET_USER_DATA, data: data})
    }

    const user = useSelector(state => state.user.userData)
    const dataEdited = useSelector(state => state.user.dataEdited)

    return (
        <div className={'details-page'}>
            {dataEdited && <SuccessBanner link={true} text={'Account data edited success'}/>}
            <div className={'page-title'}>
                <p>My account</p>
                <span/>
            </div>
            <p className={'details-page-subtitle'}>These are the personal details that we currently hold for you. If you wish to edit, update or add to them, please do so using these fields and save your changes before you move on.</p>
            <DetailsForm changeData={changeData} user={user}/>
        </div>
    )
}