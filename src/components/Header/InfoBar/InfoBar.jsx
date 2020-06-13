import {NavLink} from "react-router-dom"
import React, {useState} from "react"
import '../../../scss/header/header.scss'
import CloseIcon from '@material-ui/icons/Close'

export const InfoBar = (props) => {
    return (
        <div className={'info-bar'}>
            <div className={'info-bar-content'}>
                <p>We're still open and delivering. Subscribe to our newsletter to hear about exclusive offers.</p>
                <NavLink to={`/voucher`}>Sign up</NavLink>
                <CloseIcon className={'close-icon'} onClick={() => {props.setInfoBarView(false)}}/>
            </div>
        </div>
    )
}