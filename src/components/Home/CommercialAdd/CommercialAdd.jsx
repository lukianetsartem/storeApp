import React from 'react'
import {NavLink} from "react-router-dom";
import '../../../scss/home/commercialAdd.scss'

export const CommercialAdd = (props) => {
    return (
        <div className={'commercial-banner-section'}>
            <div className={'painted-banner'}>
                <img alt={''} src={props.firstBanner.picture}/>
                <p>{props.firstBanner.title}</p>
                <NavLink className={'commercial-add-link'} to={props.firstBanner.link}>Shop now</NavLink>
            </div>
            <div className={'unpainted-banner'}>
                <p>{props.secondBanner.title}</p>
                <img alt={''} src={props.secondBanner.picture}/>
                <p className={'unpainted-banner-description'}>{props.secondBanner.description}</p>
                <NavLink className={'commercial-add-link'} to={props.secondBanner.link}>Shop now</NavLink>
            </div>
        </div>
    )
}