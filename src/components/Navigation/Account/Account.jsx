import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {NavLink, Redirect} from "react-router-dom"
import {Preloader} from "../../common/Preloader/Preloader"

export const Account = () => {
    const dispatch = useDispatch()

    useEffect(() => {

    }, [])

    // Getting data from state
    const isAuth = useSelector(state => state.user.isAuth)
    const isDataLoaded = useSelector(state => state.user.isDataLoaded)
    const user = useSelector(state => state.user.user)

    // Checking if user is authorized
    if (!isAuth) return <Redirect to={'/signin'}/>
    // Checking if user data is loaded
    if (!isDataLoaded) return <Preloader/>
    return (
        <div>
            <div>{user.firstName}</div>
            <button>
                <NavLink to={'/signin'}>Log out</NavLink>
            </button>
        </div>
    )
}