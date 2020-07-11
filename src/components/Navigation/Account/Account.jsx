import React from 'react'
import {useSelector} from "react-redux"
import {Signin} from "./Signin/Signin"

export const Account = () => {
    const isAuth = useSelector(state => state.auth.isAuth)

    if(!isAuth) return <Signin/>

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