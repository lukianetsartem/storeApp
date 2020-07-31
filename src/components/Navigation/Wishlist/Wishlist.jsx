import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {editWishList, setWishList} from "../../../reducers/shop"
import {Preloader} from "../../common/Preloader"
import {WishListInspiration} from "./WishListInspiration"
import {WishListAuth} from "./WishListAuth"
import {WishListContent} from "./WishListContent"

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
            {!isAuth ? <WishListAuth/>
                : <WishListContent editMode={editMode} removeFromEditList={removeFromEditList}
                                   addToEditList={addToEditList} wishList={wishList}/>}
            <WishListInspiration/>
        </div>
    )
}