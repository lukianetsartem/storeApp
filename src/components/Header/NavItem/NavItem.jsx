import {NavLink} from "react-router-dom"
import React from "react"

export const NavItem = (props) => {
    return (
        <ul className={'nav'}>
            <li className={'nav-item'}>
                <NavLink to={`/${props.name}`}>{props.name}</NavLink>
            </li>
        </ul>
    )
}