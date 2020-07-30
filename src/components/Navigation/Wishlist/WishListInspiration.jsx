import {NavLink} from "react-router-dom"
import React from "react"

export const WishListInspiration = () => {
    return (
        <div className={'wish-list-inspiration'}>
            <p>Need some inspiration?</p>
            <div>
                <NavLink to={'/bed'}>Beds</NavLink>
                <NavLink to={'/sofa'}>Sofas</NavLink>
                <NavLink to={'/chair'}>Chairs</NavLink>
                <NavLink to={'/table'}>Tables</NavLink>
                <NavLink to={'/storage'}>Storage</NavLink>
                <NavLink to={'/accessories'}>Accessories</NavLink>
            </div>
        </div>
    )
}