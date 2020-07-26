import React from 'react'
import CheckIcon from "@material-ui/icons/Check"
import {NavLink} from "react-router-dom"
import '../../scss/common/successbanner.scss'

export const SuccessBanner = (props) => {
    return (
        <div className={'success-banner'}>
            <CheckIcon className={'success-banner-icon'}/>
            <p>{props.text}{props.link && ','}</p>
            {props.link && <NavLink to={'/customer/account'}>back to account</NavLink>}
        </div>
    )
}