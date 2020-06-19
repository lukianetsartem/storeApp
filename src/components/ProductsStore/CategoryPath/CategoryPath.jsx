import React from "react"
import {NavLink} from "react-router-dom"
import '../../../scss/productsStore/productsStore.scss'

export const CategoryPath = (props) => {

    return (
        <div className={'category-path'}>
            <NavLink to={'/home'}>Home</NavLink>
            <span>/</span>
            <NavLink to={`/${props.categoryPath}`}>{props.categoryPath}</NavLink>
            <span>/</span>
            {props.productId && <p>{props.productId.split('-').join(' ')}</p>}
        </div>
    )
}