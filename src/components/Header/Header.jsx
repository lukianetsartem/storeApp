import React, {useState} from 'react'
import '../../scss/header/header.scss'
import {NavItem} from "./NavItem/NavItem"
import {InfoBar} from "./InfoBar/InfoBar"
import logo from "../../assets/img/logo.jpg"
import {NavLink} from "react-router-dom"
import {SearchForm} from "../Forms/Search/SearchForm"
import {SecondaryArea} from "./SecondaryArea/SecondaryArea"
import {useSelector} from "react-redux"

export const Header = () => {
    // Info bar enable/disable state
    const [infoBarView, setInfoBarView] = useState(true)
    const isAuth = useSelector(state => state.user.isAuth)

    return (
        <header className={'header'}>
            <div className={'first-header-area'}>
                <NavLink className={'logo'} to={'/home'}>
                    <img src={logo} alt={'logo'}/>
                </NavLink>
                <div className={'search-area'}>
                    <SearchForm/>
                </div>
                <div>
                    <SecondaryArea isAuth={isAuth}/>
                </div>
            </div>
            <div className={'second-header-area'}>
                <NavItem name={'sofa'}/>
                <NavItem name={'chair'}/>
                <NavItem name={'bed'}/>
                <NavItem name={'table'}/>
                <NavItem name={'storage'}/>
                <NavItem name={'lightning'}/>
                <NavItem name={'accessories'}/>
                <NavItem name={'garden'}/>
            </div>
            {infoBarView && <InfoBar setInfoBarView={setInfoBarView}/>}
        </header>
    )
}