import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {editWishList, setWishList} from "../../../reducers/shop"
import {Preloader} from "../../common/Preloader"
import {WishListItem} from "./WishListItem"
import {WishListInspiration} from "./WishListInspiration"
import {NavLink} from "react-router-dom";

export const Wishlist = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setWishList())
    }, [dispatch])

    const isAuth = useSelector(state => state.user.isAuth)
    const wishList = useSelector(state => state.shop.wishList)
    const wishListLoaded = useSelector(state => state.shop.wishListLoaded)

    const [editMode, setEditMode] = useState(false)
    const [editList, setEditList] = useState([])
    const addToEditList = (id) => {
        setEditList([...editList, id])
    }
    const removeFromEditList = (id) => {
        setEditList([...editList.filter(itemId => itemId !== id)])
    }
    const editWishListSubmit = (data) => {
        data.length > 0 && dispatch(editWishList(data))
    }

    if (!wishListLoaded) return <Preloader/>
    return (
        <div className={'wish-list-page'}>
            <p className={'wish-list-page-title'}>Wishlist</p>
            {isAuth && wishList.length > 0 &&
            <div className={'wish-list-navigation'}>
                <p>{wishList.length}{wishList.length === 1 ? " product" : " products"}</p>
                {!editMode ? <button className={'wish-list-edit-btn'} onClick={() => setEditMode(true)}>Edit</button>
                    : <button className={'wish-list-done-btn'} onClick={() => {
                        editWishListSubmit(editList)
                        setEditMode(false)
                    }}>Done</button>}
            </div>}
            {!isAuth ? <div className={'wish-list-auth-banner'}>
                    <p>Looking for your saved items?</p>
                    <NavLink className={'wish-list-auth-banner-signin'} to={'/signin'}>sign in</NavLink>
                    <NavLink className={'wish-list-auth-banner-signup'} to={'/signup'}>create an account</NavLink>
                </div>
                : <div className={'wish-list-content'}
                       style={wishList.length === 3 ? {justifyContent: "space-between"} : undefined}>
                    {wishList.length > 0 ? wishList.map(product => <WishListItem key={product.description}
                                                                                 editMode={editMode}
                                                                                 removeFromEditList={removeFromEditList}
                                                                                 addToEditList={addToEditList}
                                                                                 product={product}/>)
                        : <div className={'wish-list-empty'}>
                            <p className={'wish-list-empty-title'}>Your wishlist is empty</p>
                            <p className={'wish-list-empty-subtitle'}>We've got some ideas in our <NavLink to={'/home'}>shop</NavLink></p>
                        </div>}
                </div>}
            <WishListInspiration/>
        </div>
    )
}