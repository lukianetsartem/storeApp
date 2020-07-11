import React from 'react'
import {useSelector} from "react-redux"
import {Redirect} from "react-router-dom";

export const Account = () => {
    const isAuth = useSelector(state => state.auth.isAuth)

    if(!isAuth) return <Redirect to={'/signin'}/>

    return (
        <div>
            <div>dasdasd</div>
            <div>dasdasd</div>
            <div>dasdasd</div>
            <div>dasdasd</div>
            <div>dasdasd</div>
            <div>dasdasd</div>
            <div>dasdasd</div>
            <div>dasdasd</div>
            <div>dasdasd</div>
        </div>
    )
}