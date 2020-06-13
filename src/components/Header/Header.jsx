import React, {useState} from 'react'
import '../../scss/header/header.scss'
import {NavItem} from "./NavItem/NavItem"
import {InfoBar} from "./InfoBar/InfoBar"
import logo from "../../assets/img/logo.jpg"
import {NavLink} from "react-router-dom"
import {SearchForm} from "../Forms/SearchForm/SearchForm"
import {SecondaryArea} from "./SecondaryArea";

export const Header = () => {
    const [infoBarView, setInfoBarView] = useState(true);

    return (
        <header className={'header'}>
            <div className={'first-header-area'}>
                <NavLink className={'logo'} to={'/'}>
                    <img src={logo}/>
                </NavLink>
                <div className={'search-area'}>
                    <SearchForm/>
                </div>
                <div>
                    <SecondaryArea/>
                </div>
            </div>
            <div className={'second-header-area'}>
                <NavItem name={'sofas'}/>
                <NavItem name={'chairs'}/>
                <NavItem name={'tables'}/>
                <NavItem name={'storage'}/>
                <NavItem name={'beds'}/>
                <NavItem name={'lightning'}/>
                <NavItem name={'accessories'}/>
                <NavItem name={'garden'}/>
            </div>
            {infoBarView && <InfoBar setInfoBarView={setInfoBarView}/>}
        </header>
    )
}