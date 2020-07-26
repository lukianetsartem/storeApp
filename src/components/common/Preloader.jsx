import React from 'react'
import loader from '../../assets/loading/loading.gif'
import '../../scss/common/preloader.scss'

export const Preloader = () => {
    return (
        <div className={'preloader'}>
            <img alt={''} src={loader}/>
        </div>
    )
}