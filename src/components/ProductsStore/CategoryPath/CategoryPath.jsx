import React from "react"
import {NavLink} from "react-router-dom"
import '../../../scss/productsStore/productsStore.scss'

export const CategoryPath = (props) => {
    return (
        <div className={'category-path'}>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={`/${props.categoryPath}`}> / {props.categoryPath}</NavLink>
            {props.productName && <NavLink to={`/${props.categoryPath}/${props.productName}`}>/
                {props.productName}</NavLink>}
        </div>
    )
}