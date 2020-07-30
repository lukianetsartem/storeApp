import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setWishList} from "../../../reducers/shop"
import {Preloader} from "../../common/Preloader"
import {WishListItem} from "./WishListItem"
import {NavLink} from "react-router-dom";

export const Wishlist = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setWishList())
    }, [dispatch])

    const isAuth = useSelector(state => state.user.isAuth)
    const wishList = useSelector(state => state.shop.wishList)

    const [editMode, setEditMode] = useState(false)
    const [editList, setEditList] = useState([])
    const addToEditList = (id) => {
        setEditList([...editList, id])
        console.log(editList)
    }

    if (!wishList[0]) return <Preloader/>
    return (
        <div className={'wish-list-page'}>
            <p className={'wish-list-page-title'}>Wishlist</p>
            {isAuth && <div className={'wish-list-navigation'}>
                <p>{wishList.length}{wishList.length === 1 ? " product" : " products"}</p>
                {!editMode ? <button className={'wish-list-edit-btn'} onClick={() => setEditMode(true)}>Edit</button>
                    : <button className={'wish-list-done-btn'} onClick={() => setEditMode(false)}>Done</button>}
            </div>}
            {!isAuth
                ? <div className={'wish-list-auth-banner'}>

                </div>
                : <div className={'wish-list-content'}
                       style={wishList.length > 2 ? {justifyContent: "space-between"} : undefined}>
                    {wishList.map(product => <WishListItem key={product.description}
                                                           editMode={editMode}
                                                           addToEditList={addToEditList}
                                                           product={product}/>)}
                </div>}
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
        </div>
    )
}


